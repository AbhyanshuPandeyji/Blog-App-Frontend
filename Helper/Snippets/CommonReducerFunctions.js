
// Type multiple file uploads - based on backend response.
export const uploadCampaignFilesThunkMiddleware = ({
    campaignName,
    files,
    inputRef,
    campaignType,
  }) => {
    return async (dispatch) => {
      try {
        dispatch(setProgress({ progressView: true }));
        dispatch(
          setProgress({ uploadCampaignFileStatus: true, progressTab: "upload" })
        );
  
        let totalFiles = files.length;
        let totalUploaded = 0;
  
        dispatch(
          setCampaignLoader({
            campaignName,
            status: true,
            totalFiles: files ? totalFiles : 0,
            totalUpload: totalUploaded,
          })
        );
  
        toastify({
          msg: "Uploading Started!",
          type: "success",
        });
  
        for (let i = 0; i < totalFiles; i++) {
          // const currentFileNumber = i + 1 ;
          const formData = new FormData();
          // const fileName = `file${i + 1}`
          // formData.append("pdf", files[i]);
          formData.append("files", files[i]);
          formData.append("currentFile", i + 1)
          formData.append("campaignName", campaignName);
          formData.append("totalFiles", totalFiles);
          formData.append("type", campaignType);
  
          const response = await axios.post(
            // `/campaign/uploadMultiplePdf`,
            `/campaign/uploadMultiplePdfs3`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
  
          if (response.status === 200) {
            // console.log(response.data);
            totalUploaded++;
            dispatch(
              setCampaignLoader({
                campaignName,
                status: true,
                totalFiles: files ? totalFiles : 0,
                totalUpload: totalUploaded,
              })
            );
          }
        }
  
        await dispatch(getCampaignByNameThunkMiddleware({ campaignName }));
        toastify({
          msg: "All files uploaded successfully",
          type: "success",
        });
      } catch (error) {
        // console.log(error);
        if (error.response?.data) {
          toastify({ msg: error.response.data.message, type: "error" });
        } else {
          toastify({ msg: error.message, type: "error" });
        }
      } finally {
        dispatch(
          removeCampaignLoader({
            campaignName,
          })
        );
        dispatch(setProgress({ uploadCampaignFileStatus: false }));
        if (inputRef.current.value) {
          inputRef.current.value = "";
        }
      }
    };
  };

// zip file download
  export const downloadCampaignFilesThunkMiddleware = ({ campaignName }) => {
    return async (dispatch) => {
      try {
        dispatch(setLoader({ loader: true }));
  
        const response = await axios.post(
          `/campaign/getPresentPdfLinks`,
          {
            campaignName,
          });
  
        if (response.status === 200) {
          const campaignFilesLink = response.data.pdfLinks;
          toastify({ msg: "PDF Document Download Started!", type: "success" });
  
          dispatch(setLoader({ loader: false }));
          dispatch(
            setProgress({
              downloadCampaignFileStatus: true,
              progressTab: "download",
              progressView: true,
            })
          );
  
          let currentBatchSize = 0;
          const maxSize = 300 * 1024 * 1024; // 300MB in bytes
          let batchNumber = 1;
          let zip = new JSZip();
          let filesFolder = zip.folder(`Document_Part${batchNumber}`);
  
          let processedFiles = 0;
          const totalFiles = campaignFilesLink.length;
          // console.log("campaignfiles", campaignFilesLink)
          for (let i = 0; i < totalFiles; i++) {
            if (campaignFilesLink[i] !== "") {
              // const fileUrl = `${campaignFilesLink[i].link}?t=${Date.now()}`;//this is basically previous code in the terms when the files were in server itself but now files are from the aws storage
              const fileUrl = campaignFilesLink[i].link;
              const fileBlob = await fetch(fileUrl).then((res) => res.blob());
              // const response = await axios.get(fileUrl, {
              //   responseType: 'blob'
              // });
              // console.log("file data in" , response.data)
              // const fileBlob =  new Blob([response.data] , 
              //   {
              //     type : response.headers["content-type"],
              //   }
              // )
              // console.log("file blob ", fileBlob)
              const fileSize = fileBlob.size;
              // console.log("file size", fileSize)
  
              if (currentBatchSize + fileSize > maxSize) {
                // Generate and download the current batch's zip file
                const content = await zip.generateAsync({ type: "blob" });
                saveAs(content, `Document_Part${batchNumber}.zip`);
  
                // Reset for next batch
                batchNumber++;
                zip = new JSZip();
                filesFolder = zip.folder(`Document_Part${batchNumber}`);
                currentBatchSize = 0;
              }
  
              // Add PDF to the current batch
              // console.log("file name ", campaignFilesLink[i].name)
              filesFolder.file(`${campaignFilesLink[i].name}`, fileBlob);
  
              currentBatchSize += fileSize;
              // console.log("current batch size", currentBatchSize)
              processedFiles++;
              // console.log("processed files", processedFiles);
  
              dispatch(
                setProgress({
                  downloadCampaignFileProgress: (
                    (processedFiles / totalFiles) *
                    100
                  ).toFixed(0),
                })
              );
              console.log(`Added PDF ${i + 1} to zip`);
            }
          }
  
          if (currentBatchSize > 0) {
            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, `Document_Part${batchNumber}.zip`);
          }
  
          toastify({ msg: "PDF Document Download Completed!", type: "success" });
        }
      } catch (error) {
        // console.log(error);
        if (error.response?.data) {
          toastify({ msg: error.response.data.message, type: "error" });
        } else {
          toastify({ msg: error.message, type: "error" });
        }
      } finally {
        dispatch(
          setProgress({
            downloadCampaignFileProgress: 0,
            downloadCampaignFileStatus: false,
          })
        );
      }
    };
  };


//   downloading a file by self upload using blog - not creating just using for download
export const downloadCampaignModifyExcelThunkMiddleware = ({
    campaignName,
  }) => {
    return async (dispatch) => {
      try {
        dispatch(setLoader({ loader: true }));
  
        const response = await axios.get(
          `/campaign/downloadXlsx/${campaignName}`,
          {
            responseType: "blob", // Important for handling binary data
          }
        );
  
        if (response.status === 200) {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
  
          // Create a link element
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
  
          // Set the download attribute to specify the filename
          link.setAttribute("download", `${campaignName}.xlsx`); // Replace 'filename.extension' with the desired file name
  
          // Append the link to the document body
          document.body.appendChild(link);
  
          // Programmatically click the link to trigger the download
          link.click();
  
          // Clean up and remove the link
          link.parentNode.removeChild(link);
        }
      } catch (error) {
        if (error.response?.data) {
          if (error.response.data instanceof Blob) {
            // If the response is a Blob, convert it to text
            const reader = new FileReader();
            reader.onload = () => {
              const errorMessage = JSON.parse(reader.result);
  
              toastify({ msg: errorMessage.message, type: "error" });
            };
            reader.onerror = () => {
              toastify({ msg: "Error reading error response", type: "error" });
            };
            reader.readAsText(error.response.data);
          } else {
            toastify({ msg: error.response.data.message, type: "error" });
          }
        } else {
          toastify({ msg: error.message, type: "error" });
        }
      } finally {
        dispatch(setLoader({ loader: false }));
      }
    };
  };
  


  // upload and download with multiple - request and response to send to backend.
  export const startSingleCampaignPdfTemplateThunkMiddleware = ({
    campaignName,
    campaignType
  }) => {
    return async (dispatch) => {
      try {
        dispatch(setLoader({ loader: true }));
  
        const response = await axios.post(`/campaign/mergePdfs `, {
          campaignName,
          type: campaignType,
        });
  
        if (response.status === 200) {
          const { message } = response.data;
  
          toastify({
            msg: message,
            type: "success",
          });
  
          dispatch(
            setProgress({
              progressView: true,
              progressTab: "merge",
              singlePdfCampaignFileStatus: true,
            })
          );
  
          const intervalId = setInterval(async () => {
            try {
              const response = await axios.post("/campaign/singlePdfProgress ", {
                campaignName,
                type: campaignType,
              });
  
              if (response.status === 200) {
                const { totalSinglePdfProgress, singlePdfProgress } =
                  response.data;
  
                dispatch(
                  setProgress({
                    singlePdfCampaignFileProgress: (
                      (singlePdfProgress / totalSinglePdfProgress) *
                      100
                    ).toFixed(0),
                  })
                );
  
                if (
                  response.data?.totalSinglePdfProgress ===
                  response.data?.singlePdfProgress
                ) {
                  toastify({
                    msg: "Single Pdf Merge Successfully",
                    type: "success",
                  });
                  clearInterval(intervalId);
                }
              }
            } catch (error) {
              if (error.response?.data) {
                toastify({ msg: error.response.data.message, type: "error" });
              } else {
                toastify({ msg: error.message, type: "error" });
              }
            } finally {
              dispatch(
                setProgress({
                  singlePdfCampaignFileStatus: false,
                  singlePdfCampaignFileProgress: 0,
                })
              );
              clearInterval(intervalId);
            }
          }, 2000);
        }
      } catch (error) {
        // console.log(error);
        if (error.response?.data) {
          toastify({ msg: error.response.data.message, type: "error" });
        } else {
          toastify({ msg: error.message, type: "error" });
        }
      } finally {
        dispatch(setLoader({ loader: false }));
      }
    };
  };
  