export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased px-4 sm:px-6 md:px-10 py-6 md:py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-12">
        {/* Header */}
        <header className="mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Jayendra Pawar
          </h1>

          <p className="mt-3 text-base sm:text-lg font-semibold text-gray-800">
            Software Engineer (Backend· DevOps)
          </p>

          <p className="mt-1 text-sm sm:text-base text-gray-600">
            Golang · Kubernetes · Distributed Systems · AWS 
          </p>

          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Open to Relocation (Dubai / UAE)
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <a
              href="mailto:jayendrapawar00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/jayendrapawar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/jayendrapawar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="/JayendraPawar_Resume_UAE.pdf"
              download
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white font-small leading-none hover:bg-blue-700 transition"
            >
              Download PDF
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Professional Summary
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Backend and platform engineer with 3+ years of experience designing, building, and
            operating production-critical cloud systems at scale. Strong hands-on expertise in high availability systems, CI/CD, and production DevOps. Experienced in owning
            mission-critical platforms serving millions of users and collaborating with globally
            distributed engineering teams.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-5">
            Experience
          </h2>

          {/* IBM */}
          <div className="mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              IBM — Senior Software Engineer
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Oct 2024 – Present · Bengaluru, Karnataka
            </p>

            <p className="mt-3 text-sm text-gray-700 italic">
              Focus: Large-scale VPC infrastructure, Kubernetes platforms, Reliability engineering
            </p>

            <p className="mt-4 text-sm sm:text-base font-medium text-gray-800">
              Responsibilities &amp; Impact:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Built and integrated backend services for large-scale VPC cloud infrastructure.</li>
              <li>Improved node provisioning by 30% using Kubernetes CRD-based lifecycle management.</li>
              <li>Standardized deployable architecture modules, enabling 40% faster releases.</li>
              <li>Created Slack-based service tooling for Ops, reducing MTTR by 70%.</li>
              <li>Implemented CI/CD pipelines with GitHub Actions and Jenkins for HIPAA compliance.</li>
              <li>Collaborated with SRE, product, and frontend teams to meet reliability and SLO targets.</li>
            </ul>

            <p className="mt-3 text-sm text-gray-700">
              <strong>Tech Stack:</strong> Golang, Kubernetes, GitHub Actions, Jenkins
            </p>
          </div>

          {/* Freshworks */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              Freshworks — Software Engineer
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Jul 2022 – Aug 2024 · Bengaluru, Karnataka
            </p>

            <p className="mt-3 text-sm text-gray-700 italic">
              Focus: High-scale backend platforms, Cloud migration, Performance optimization
            </p>

            <p className="mt-4 text-sm sm:text-base font-medium text-gray-800">
              Responsibilities &amp; Impact:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Built highly available microservices serving 4.9M+ global users.</li>
              <li>Designed distributed job scheduling using Kafka, Redis, gRPC, and Protobufs.</li>
              <li>Migrated services to AWS EKS, reducing infrastructure costs by 30%.</li>
              <li>Improved incident detection time by 25% via centralized prometheus monitoring.</li>
              <li>Rolled out canary deployments, reducing rollback rates by 15%.</li>
            </ul>

            <p className="mt-3 text-sm text-gray-700">
              <strong>Tech Stack:</strong> Golang, AWS, Kubernetes, Docker, Kafka, Redis, MySQL, gRPC
            </p>
          </div>
        </section>


        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Technical Skills
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <p>
              <strong>Backend :</strong> Golang, Microservices, Distributed Systems, gRPC
            </p>
            <p>
              <strong>Cloud &amp; Platform:</strong> AWS, Kubernetes, Docker, CI/CD, Github Actions, Jenkins
            </p>
            <p>
              <strong>Infrastructure &amp; Observability:</strong> Docker, Linux, Helm, Prometheus, Grafana
            </p>
            <p>
              <strong>Data &amp; Messaging:</strong> MySQL, Redis, Kafka, SQS
            </p>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Education
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            <strong>National Institute of Technology, Jaipur</strong>
            <br />
            B.Tech in Mechanical Engineering · Minor in Computer Science (2018 – 2022)
            <br />
            Aditya Birla Scholar (Top 15 across all NITs)
          </p>
        </section>
      </div>
    </main>
  );
}
