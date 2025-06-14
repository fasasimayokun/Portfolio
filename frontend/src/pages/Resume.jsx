const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 text-center mb-10 border-b-4 border-indigo-100 pb-2">
          Resume
        </h1>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Fasasi Mayokun</h2>
          <p className="text-gray-600">Backend Developer | Full Stack Enthusiast</p>
        </div>

        {/* Professional Summary */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Professional Summary</h3>
          <p className="leading-relaxed text-gray-700">
            I'm a Computer Engineering graduate from O.A.U who transitioned into web development through intense self-study and bootcamps.
            With strong knowledge of HTML, CSS, JavaScript, Python, React, Node.js, Django, and SQL, I’ve built full-stack projects like
            <span className="font-semibold"> Animal World</span> and a <span className="font-semibold">Sound Translator</span>. 
            I'm passionate about backend development and eager to gain industry experience.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Skills</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Languages:</strong> HTML, CSS, JavaScript, Python, SQL</li>
            <li><strong>Frameworks:</strong> Django, React, Express, Tailwind CSS, Bootstrap</li>
            <li><strong>Tools:</strong> Git, GitHub, MongoDB, SQLite, Postman</li>
            <li><strong>Others:</strong> REST APIs, Mongoose, Django REST Framework (basic), AssemblyAI</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Projects</h3>

          <div className="mb-6">
            <h4 className="font-semibold text-lg">Animal Kingdom (MERN Stack)</h4>
            <p className="text-gray-700 mb-1">
              A social animal web app where users explore animals, comment, and save favorites. Built with React, Express, Node.js,
              MongoDB, and Tailwind CSS.
            </p>
            <p className="text-blue-600 text-sm break-words">
              <a href="https://github.com/fasasimayokun/animal-world" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <a href="https://animal-world-1.onrender.com/" target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg">Sound Translator (Django + AssemblyAI)</h4>
            <p className="text-gray-700 mb-1">
              Transcribes English audio files into text using AssemblyAI, built with Django and vanilla HTML/CSS/JS.
            </p>
            <p className="text-blue-600 text-sm break-words">
              <a href="https://github.com/fasasimayokun/Webstack---Portfolio-Project" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Education</h3>
          <p className="text-gray-700">B.Eng Computer Engineering</p>
          <p className="text-gray-700">Obafemi Awolowo University (O.A.U), Ile-Ife, Osun State</p>
          <p className="text-gray-500 text-sm">Graduated: 15/08/2023</p>
        </section>

        {/* Certifications */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Certifications</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>ALX Software Engineering Bootcamp – Completed 1-Year Program</li>
            <li>SoloLearn Certificates – HTML, CSS, Python, JavaScript</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section>
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Contact Information</h3>
          <p><strong>Email:</strong> <a href="mailto:maykay.fash@gmail.com" className="text-blue-600">maykay.fash@gmail.com</a></p>
          <p><strong>Phone:</strong> 07085135605</p>
          <p><strong>Location:</strong> 25 Aina Falege Street, Agiliti Estate, Mile 12, Lagos</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
