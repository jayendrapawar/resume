export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 sans-serif antialiased px-4 sm:px-6 md:px-10 py-6 md:py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-12">
        {/* Header */}
        <header className="mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Jayendra Pawar
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
            Backend / Platform Engineer · AWS · Kubernetes · Distributed Systems · Golang
          </p>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Bengaluru, India · Open to Relocation (Dubai / UAE)
          </p>
          {/* Contact Links */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm whitespace-nowrap">
            <a
              href="mailto:jayendrapawar00@gmail.com"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/jayendrapawar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/jayendrapawar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>

            <a
              href="/JayendraPawar_Resume.pdf"
              download
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white font-small leading-none hover:bg-blue-700 transition"
            >
              Download PDF
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Backend and platform engineer with experience building and operating large-scale,
            production-grade cloud systems. Strong background in AWS, Kubernetes, microservices,
            and distributed systems, with proven impact on reliability, cost optimization, and
            developer productivity. Experienced owning critical infrastructure serving millions
            of users.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-5">Experience</h2>

          <div className="mb-6">
            <h3 className="text-md text-base text-gray-700 sm:text-lg">
              <strong>IBM — Software Engineer Backend (Specialist) </strong>
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Oct 2024 – Present · Bengaluru, India
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Owned backend services for large-scale VPC infrastructure, improving recovery time by 30% and reducing MTTR by 70%.</li>
              <li>Built Kubernetes-based lifecycle management for stateful workloads using CRDs and controller patterns.</li>
              <li>Standardized deployable architecture modules, enabling 40% faster feature rollouts.</li>
              <li>Developed internal Slack-based service management tooling for faster incident response.</li>
              <li>Built CI/CD pipelines with GitHub Actions and compliance-focused workflows.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-md text-base text-gray-700 sm:text-lg">
              <strong>Freshworks — Software Engineer Backend</strong>
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Jul 2022 – Aug 2024 · Bengaluru, India
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Built and scaled backend microservices serving 4.9M+ global users.</li>
              <li>Designed distributed job scheduling systems using Kafka, Redis, and gRPC.</li>
              <li>Migrated services to AWS EKS, reducing infrastructure costs by 30%.</li>
              <li>Optimized MySQL performance and reduced API latency by 40%.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-700">
            <p><strong>Cloud & Platform:</strong> AWS, Kubernetes, EKS, Terraform, CI/CD</p>
            <p><strong>Backend:</strong> Golang, Python, Microservices, Distributed Systems, gRPC</p>
            <p><strong>Infra & Observability:</strong> Docker, Linux, Prometheus, Grafana, Helm</p>
            <p><strong>Data & Messaging:</strong> MySQL, Redis, Kafka</p>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Education</h2>
          <p className="text-sm sm:text-base text-gray-700">
            <strong>National Institute of Technology, Jaipur</strong><br />
            B.Tech in Mechanical Engineering · Minor in Computer Science (2018 – 2022)<br />
            Aditya Birla Scholar (Top 15 across all NITs)
          </p>
        </section>
      </div>
    </main>
  );
}
