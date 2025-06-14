import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-8 border-b-4 border-indigo-100 pb-2 text-center">
          About Me
        </h1>

        <p className="text-lg sm:text-xl mb-6 leading-relaxed text-justify">
          Hi, I'm <span className="font-semibold text-indigo-600">Fasasi Mayokun</span>, a Computer Engineering graduate from{" "}
          <span className="font-semibold text-indigo-600">Obafemi Awolowo University (O.A.U), Ile-Ife</span>. My tech journey
          wasn’t easy — filled with false starts, but also passion, grit, and growth.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 mb-6">
          "Java — my first programming language — almost made me give up, but it was just the beginning."
        </blockquote>

        <p className="mb-6 leading-relaxed text-justify">
          HTML and CSS came easier, but JavaScript was a challenge until a friend introduced me to Python. Later, I found{" "}
          <span className="font-semibold text-indigo-600">SoloLearn</span>, a beginner-friendly app that helped me
          truly understand HTML, CSS, Python, and JavaScript at my own pace.
        </p>

        <p className="mb-6 leading-relaxed text-justify">
          Reading <em className="text-indigo-700">JavaScript and jQuery: Interactive Front-End Web Development</em> sparked my love
          for coding. I revisited Python and discovered <span className="font-semibold">Django</span> via video courses, where I also learned
          about <span className="font-semibold">SQLite</span> and <span className="font-semibold">SQL</span>.
        </p>

        <p className="mb-6 leading-relaxed text-justify">
          I enrolled in the <span className="font-semibold text-indigo-600">ALX Web Development Bootcamp</span> and despite its intensity,
          I completed it successfully. My major projects there include an <span className="font-semibold">Anime Review Website</span> and
          a <span className="font-semibold">Sound Translator App</span> that transcribes audio using AssemblyAI.
        </p>

        <p className="mb-6 leading-relaxed text-justify">
          To understand full-stack development better, I moved on to learning{" "}
          <span className="font-semibold text-indigo-600">React, Express, Node.js, MongoDB</span>, and{" "}
          <span className="font-semibold text-indigo-600">Tailwind CSS</span>. With these, I built my first complete MERN app:
          <span className="font-semibold"> Animal World</span> — a social animal info platform inspired by a Twitter clone project.
        </p>

        <p className="mb-6 leading-relaxed text-justify">
          Currently, I’m exploring multiple languages including Java, C, C++, C#, Go, Ruby, and TypeScript through{" "}
          <span className="font-semibold text-indigo-600">SoloLearn</span>. I’ve proudly maintained a{" "}
          <span className="font-semibold text-indigo-600">780-day streak</span> of consistent learning and still ongoing.
        </p>

        <p className="mb-6 leading-relaxed text-justify">
          Today, I feel confident in <span className="font-semibold">HTML, CSS, Python, JavaScript, and SQL</span>, and
          I'm aiming for backend or full-stack roles to gain real-world experience and contribute meaningfully.
        </p>

        <h2 className="text-2xl font-bold text-indigo-700 mt-10 mb-4 text-center">More About Me</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-base sm:text-lg">
          <li>I'm a huge anime fan and love reading webtoons and light novels.</li>
          <li>Movies, animations, and K-dramas are my go-to for relaxation and inspiration.</li>
          <li>I enjoy coding challenges and building tools that solve real problems.</li>
          <li>I strongly believe in daily learning and consistent practice.</li>
        </ul>

        <p className="text-lg font-medium text-gray-800 text-center">
          I’m excited for what lies ahead and look forward to creating innovative solutions that make a difference in people’s lives.
        </p>
      </div>
    </div>
  );
};

export default About;
