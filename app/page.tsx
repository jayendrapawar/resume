export default function Resume() {
  return (
    <main className="resume-scaler min-h-screen bg-gray-50 text-gray-900 antialiased px-3 sm:px-6 md:px-10 py-5 md:py-12">
      <div className="relative max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-5 sm:p-8 md:p-12">

        {/* Download button — top-right corner */}
        <a
          href="/Jayendra_Pawar_Resume_SDE2.pdf"
          download
          className="absolute top-3 right-3 sm:top-5 sm:right-5 inline-flex items-center gap-1 bg-[#2e5aac] text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded hover:bg-[#1f4490] transition z-10"
        >
          ↓ Download PDF
        </a>

        {/* Header */}
        <header className="pt-6 sm:pt-0 mb-6 md:mb-10 text-center">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-normal uppercase">
            Jayendra Pawar
          </h1>

          {/* Mobile: two lines | Desktop: one line */}
          <div className="sm:hidden mt-2">
            <p className="text-xs font-bold text-[#2e5aac] leading-snug">Software Engineer</p>
            <p className="text-xs font-bold text-[#2e5aac] leading-snug">Go | Distributed Systems | Kubernetes | Cloud Infrastructure</p>
          </div>
          <p className="hidden sm:block mt-2 text-sm md:text-base font-bold text-[#2e5aac] leading-snug">
            Software Engineer — Go | Distributed Systems | Kubernetes | Cloud Infrastructure
          </p>

          {/* Mobile: two stacked lines | sm+: single inline row */}
          <div className="mt-2 text-xs sm:text-sm text-gray-600">
            {/* Mobile: two lines */}
            <div className="sm:hidden">
              <p className="leading-relaxed">
                <span>Bengaluru, Karnataka</span>
                <span className="mx-1 text-gray-400">·</span>
                <span>+91 7043609749</span>
              </p>
              <p className="leading-relaxed">
                <a href="mailto:jayendrapawar00@gmail.com" className="text-[#2e5aac] hover:underline">jayendrapawar00@gmail.com</a>
                <span className="mx-1 text-gray-400">·</span>
                <a href="https://www.linkedin.com/in/jayendrapawar" target="_blank" rel="noopener noreferrer" className="text-[#2e5aac] hover:underline">LinkedIn</a>
                <span className="mx-1 text-gray-400">·</span>
                <a href="https://github.com/jayendrapawar" target="_blank" rel="noopener noreferrer" className="text-[#2e5aac] hover:underline">GitHub</a>
              </p>
            </div>
            {/* Desktop: single line */}
            <p className="hidden sm:block leading-relaxed">
              <span>Bengaluru, Karnataka</span>
              <span className="mx-1 text-gray-400">·</span>
              <span>+91 7043609749</span>
              <span className="mx-1 text-gray-400">·</span>
              <a href="mailto:jayendrapawar00@gmail.com" className="text-[#2e5aac] hover:underline">jayendrapawar00@gmail.com</a>
              <span className="mx-1 text-gray-400">·</span>
              <a href="https://www.linkedin.com/in/jayendrapawar" target="_blank" rel="noopener noreferrer" className="text-[#2e5aac] hover:underline">LinkedIn</a>
              <span className="mx-1 text-gray-400">·</span>
              <a href="https://github.com/jayendrapawar" target="_blank" rel="noopener noreferrer" className="text-[#2e5aac] hover:underline">GitHub</a>
            </p>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-5 sm:mb-6">
          <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal border-b border-gray-400 text-[#1f2a44] pb-0.5 mb-3">
            Work Experience
          </h2>

          {/* IBM */}
          <div className="mb-5 sm:mb-6">
            <div className="flex flex-row justify-between items-baseline">
              <h3 className="text-sm sm:text-base font-bold text-[#1f2a44] tracking-normal">IBM</h3>
              <span className="text-xs sm:text-sm text-gray-500">Oct 2024 – Present</span>
            </div>
            <div className="flex flex-row justify-between items-baseline gap-2">
              <p className="text-xs sm:text-sm italic text-gray-700 truncate">Software Engineer II (Platform/Backend)</p>
              <span className="text-xs sm:text-sm text-gray-500 shrink-0">Bengaluru, Karnataka</span>
            </div>

            {/* Distributed Worker Orchestration */}
            <p className="mt-3 text-xs sm:text-sm font-bold text-[#2e5aac]">Distributed Worker Orchestration</p>
            <ul className="list-disc pl-4 sm:pl-5 mt-1 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>
                Architected a highly available, <strong>Go-based Kubernetes controller</strong> for{" "}
                <strong>10K+ workers</strong>, automating <strong>worker lifecycle management</strong> (provisioning,
                replacement &amp; decommissioning) and <strong>reducing provisioning latency by 30%</strong>.
              </li>
              <li>
                Orchestrated <strong>safety-gated cluster automation</strong> for <strong>maintenance</strong> &amp;{" "}
                <strong>node upgrades</strong>, automating unhealthy-node replacement and unclaimed-node cleanup while{" "}
                <strong>improving cluster utilization by 25%</strong> and reducing recurring on-call escalations.
              </li>
              <li>
                Designed a <strong>zone-aware auto-scaling strategy</strong> balancing resource utilization vs.
                availability across <strong>multi-AZ clusters</strong>, sustaining <strong>99.9% uptime</strong> while
                eliminating over-provisioning.
              </li>
              <li>
                Developed an <strong>integration-test framework</strong> on <strong>dedicated Kubernetes clusters</strong>,
                validating <strong>platform controllers</strong> for worker orchestration, reconciliation, scaling,
                resilience &amp; recovery across <strong>12+ managed data services</strong> as a{" "}
                <strong>production-readiness gate</strong>.
              </li>
            </ul>

            {/* Instance Networking & Access Control */}
            <p className="mt-3 text-xs sm:text-sm font-bold text-[#2e5aac]">Instance Networking &amp; Access Control</p>
            <ul className="list-disc pl-4 sm:pl-5 mt-1 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>
                Led the <strong>end-to-end development</strong> of <strong>instance network controls in Go</strong>,
                covering <strong>REST API design</strong>, <strong>event-driven network updates</strong>,{" "}
                <strong>technical specifications</strong> and <strong>infrastructure planning</strong>; delivered
                SDK/CLI support for <strong>enterprise customers</strong>.
              </li>
              <li>
                Engineered <strong>instance network-state synchronization</strong> using{" "}
                <strong>Kubernetes informers</strong>, <strong>rate-limited queues</strong> and{" "}
                <strong>batch processing</strong>, enabling deduplication, idempotency, retries, and failure isolation
                to meet a <strong>10s network-state consistency SLA</strong>.
              </li>
              <li>
                Implemented <strong>instance-level network policy enforcement</strong>, evaluating user-defined rules
                on connection requests to authorize <strong>instance-to-instance connectivity</strong>, replacing broad
                service-wide permissions with <strong>fine-grained access controls</strong>.
              </li>
            </ul>

            {/* Cloud Engineering & Reliability */}
            <p className="mt-3 text-xs sm:text-sm font-bold text-[#2e5aac]">Cloud Infrastructure &amp; Reliability</p>
            <ul className="list-disc pl-4 sm:pl-5 mt-1 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>
                Led <strong>compute migration &amp; resource optimization</strong>, reducing{" "}
                <strong>infrastructure costs by ~14% ($166K)</strong> while mitigating outage risks.
              </li>
              <li>
                Built a <strong>Slack-based ChatOps</strong> platform providing <strong>30+ Kubernetes &amp; cloud-service
                operations</strong>, reducing operational toil and accelerating incident resolution.
              </li>
              <li>
                Standardized <strong>Deployable Architecture (IaC) modules</strong>, enabling{" "}
                <strong>40% faster feature rollouts</strong> and simplifying <strong>IAM configuration</strong> across
                teams while strengthening system resilience.
              </li>
              <li>
                Established <strong>CI/CD pipelines</strong> using <strong>GitHub Actions</strong>, with pre-merge
                validation, security scanning, and quality gates, enabling{" "}
                <strong>zero-downtime deployments</strong> across <strong>on-premises Kubernetes clusters</strong>.
              </li>
            </ul>
          </div>

          {/* Freshworks */}
          <div>
            <div className="flex flex-row justify-between items-baseline">
              <h3 className="text-sm sm:text-base font-bold text-[#1f2a44] tracking-normal">Freshworks</h3>
              <span className="text-xs sm:text-sm text-gray-500">Jul 2022 – Sept 2024</span>
            </div>
            <div className="flex flex-row justify-between items-baseline gap-2">
              <p className="text-xs sm:text-sm italic text-gray-700 truncate">Software Engineer (Backend)</p>
              <span className="text-xs sm:text-sm text-gray-500 shrink-0">Bengaluru, Karnataka</span>
            </div>

            <p className="mt-3 text-xs sm:text-sm font-bold text-[#2e5aac]">Payment Services &amp; Integrations</p>
            <ul className="list-disc pl-4 sm:pl-5 mt-1 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>
                Engineered a <strong>highly available distributed payment service</strong> integrating{" "}
                <strong>Stripe APIs</strong> in <strong>FreshPay</strong>, enabling critical{" "}
                <strong>payment workflows</strong> such as bind flow, authorization, tokenization, payments, and
                refunds; serving <strong>4.9 million users</strong> in Europe.
              </li>
              <li>
                Developed a <strong>scalable asynchronous notification service</strong>, incorporating{" "}
                <strong>API specifications</strong>, <strong>ERD designs</strong>, and workflows using <strong>gRPC</strong>{" "}
                and <strong>schedulers</strong>, supporting <strong>150K+ customers</strong>.
              </li>
              <li>
                Led the <strong>migration of payment services</strong> to <strong>EKS (Kubernetes)</strong>, achieving a{" "}
                <strong>30% cost reduction</strong> while enhancing <strong>deployment efficiency</strong> and{" "}
                <strong>scalability</strong> for millions of daily transactions.
              </li>
              <li>
                Accelerated <strong>MySQL performance</strong>, cutting <strong>query execution time by 60%</strong>{" "}
                through <strong>indexing</strong>, <strong>partitioning</strong>, and{" "}
                <strong>execution plan optimization</strong>. Implemented <strong>CDC-based caching</strong> to
                synchronize dynamic and static data in real time,{" "}
                <strong>reducing API response time by 40%</strong>.
              </li>
              <li>
                Deployed <strong>canary releases</strong> across <strong>5 microservices</strong>, minimizing deployment
                risk and <strong>reducing rollback rate by 15%</strong> while ensuring adherence to release policies,
                performance benchmarks, and SLOs.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5 sm:mb-6">
          <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal border-b border-gray-400 text-[#1f2a44] pb-0.5 mb-3">
            Education
          </h2>
          {/* Mobile: stacked | sm+: two-column */}
          <div className="block sm:hidden">
            <p className="text-sm sm:text-base font-bold text-[#1f2a44] tracking-normal">National Institute of Technology, Jaipur</p>
            <p className="text-xs italic text-gray-700 mt-0.5">Bachelor of Technology in Mechanical Engineering; Minor in Computer Science</p>
            <ul className="list-disc pl-4 mt-1 text-xs text-gray-700 leading-relaxed">
              <li>
                Awarded <strong>Aditya Birla Scholarship</strong> — ranked among the{" "}
                <strong>top 15 candidates across all NITs</strong> (2021)
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-row justify-between items-baseline">
              <p className="text-sm sm:text-base font-bold text-[#1f2a44] tracking-normal">National Institute of Technology, Jaipur</p>
              <span className="text-xs sm:text-sm text-gray-500 shrink-0 ml-2">Jul 2018 – Jun 2022</span>
            </div>
            <div className="flex flex-row justify-between items-baseline gap-2">
              <p className="text-xs sm:text-sm italic text-gray-700">Bachelor of Technology in Mechanical Engineering; Minor in Computer Science</p>
              <span className="text-xs sm:text-sm text-gray-500 shrink-0">Jaipur, Rajasthan</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 leading-relaxed">
              <li>
                Awarded <strong>Aditya Birla Scholarship</strong> — ranked among the{" "}
                <strong>top 15 candidates across all NITs</strong> (2021)
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm sm:text-base font-bold uppercase tracking-normal border-b border-gray-400 text-[#1f2a44] pb-0.5 mb-3">
            Skills
          </h2>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <li><strong>Programming Languages:</strong> Go, Python, Rust, C/C++</li>
            <li><strong>Backend &amp; Distributed Systems:</strong> REST APIs, gRPC, WebSockets, Kafka, RabbitMQ, Concurrency, Event-Driven Architectures</li>
            <li><strong>Cloud &amp; Infrastructure:</strong> Kubernetes, Docker, Linux, Helm, Terraform, GitHub Actions, Jenkins, Reliability Engineering</li>
            <li><strong>Databases &amp; Observability:</strong> MySQL (Indexing, Partitioning), Redis, Prometheus, Grafana, Monitoring &amp; Alerting</li>
            <li><strong>Core Areas:</strong> Data Structures &amp; Algorithms, Object-Oriented Design, System Design, Microservices, Performance Optimization</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
