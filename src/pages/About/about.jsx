
function About() {
  return (
    <div className="about-container">
      <h1 className="text-4xl font-semibold text-center p-10 bg-yellow-400">About Me</h1>
      <div className="p-8">
        <section className="about-section flex gap-y-4 flex-col mb-10">
          <h2 className="text-2xl font-semibold italic underline bg-red-400 p-2 px-4 rounded-lg">Who I Am</h2>
          <p className="italic text-lg text-gray-500">
            Hello, and welcome to my website! I'm a self-taught web developer with over two years
            of hands-on experience building websites, applications, and digital tools entirely on
            my own. My journey into development wasn’t born in a classroom—it came from curiosity,
            countless late nights, and an intense passion for problem-solving. What began as a
            hobby quickly grew into a personal mission: to create, share, and inspire through
            technology and ideas.
          </p>
          <p className="italic text-lg text-gray-500">
            My technical journey has been one of persistence and self-discovery. I’ve built several
            full-stack websites from scratch, constantly exploring new technologies and refining my
            skills with each project. Through trial, error, and endless learning, I’ve grown from a
            beginner to someone confident in designing clean user interfaces, building efficient
            backends, and deploying modern, responsive web applications.
          </p>
        </section>

        <section className="about-section flex gap-y-4 flex-col mb-10">
          <h2 className="text-2xl font-semibold italic underline bg-blue-400 rounded-lg p-2 px-4">About This Website</h2>
          <p className="italic text-lg text-gray-500">
            This website is my personal space on the internet—a place where all my worlds intersect.
            It serves as a portfolio of my development work, but more importantly, it's a platform
            for sharing something deeper: my thoughts, experiences, and insights.
          </p>
          <p className="italic text-lg text-gray-500">
            Here, you’ll find <strong>blogs I've personally written</strong>, each one crafted with
            intention. I write about topics that matter to me—technology, mindset, creativity,
            philosophy, self-growth, and the intersection of all these areas. The writing isn’t just
            technical or instructional. It’s reflective, thought-provoking, and sometimes
            challenging. My goal isn’t just to inform, but to inspire you to think a little
            differently.
          </p>
          <p className="italic text-lg text-gray-500">
            In a world full of noise and distraction, I want this site to be a quiet place for depth,
            exploration, and meaningful ideas.
          </p>
        </section>

        <section className="about-section flex gap-y-4 flex-col mb-10">
          <h2 className="text-2xl font-semibold italic underline bg-green-400 rounded-lg p-2 px-4">My Mission</h2>
          <p className="italic text-lg text-gray-500">
            At the core, my mission is simple: <strong>to enlighten people through intellectual
              conversation and shared perspectives.</strong> The internet is full of quick takes and
            surface-level content, but I believe there’s still space for real thought—ideas that
            linger in your mind long after you’ve read them.
          </p>
          <p className="italic text-lg text-gray-500">
            Whether I’m writing about the mental state of a self-taught coder, the ethical use of AI,
            or how ancient philosophy still applies to modern life, everything I publish here is
            meant to spark conversation and insight. I believe knowledge is only valuable when it's
            shared, and that thinking deeply is one of the most powerful things we can do.
          </p>
          <p className="italic text-lg text-gray-500">
            This site isn’t just about me—it’s about us. It’s about building a quiet corner of the
            web where curiosity thrives, ideas evolve, and people can connect beyond trends and
            buzzwords.
          </p>
          <p className="italic text-lg text-gray-500">Thank you for stopping by, and I hope you find something here that resonates with you.</p>
        </section>
      </div>
    </div>
  );
}

export default About;
