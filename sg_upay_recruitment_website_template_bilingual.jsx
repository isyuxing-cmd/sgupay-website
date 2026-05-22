export default function SGUpayWebsite() {
  const jobs = [
    {
      title: "MIG Welder 二保焊工",
      salary: "$1800 - $3200",
      type: "Manufacturing 制造业",
    },
    {
      title: "Kitchen Helper 厨房助手",
      salary: "$1600 - $2400",
      type: "Service 服务业",
    },
    {
      title: "Curtain Installer 窗帘安装工",
      salary: "$2000 - $3500",
      type: "Installation 安装类",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              SG UPAY TECHNOLOGY DEVELOPMENT PTE LTD
            </h1>
            <p className="text-sm text-gray-500">
              Singapore Recruitment & Manpower Services
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-black text-white px-5 py-2 rounded-2xl text-sm hover:opacity-90 transition">
              WhatsApp
            </button>
            <button className="border px-5 py-2 rounded-2xl text-sm hover:bg-gray-100 transition">
              Contact 联系我们
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Singapore Recruitment Agency
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Reliable Manpower Solutions
            <br />
            专业新加坡人力招聘服务
          </h2>

          <p className="text-lg text-gray-600 leading-8 mb-8">
            We specialize in manufacturing and service industry recruitment,
            connecting employers with skilled workers currently available in
            Singapore and overseas.
            <br />
            <br />
            专注制造业与服务业招聘，提供中国及海外工人资源，快速匹配，
            可安排现场面试与试工。
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-7 py-4 rounded-2xl text-lg hover:opacity-90 transition">
              View Jobs 查看职位
            </button>

            <button className="border border-black px-7 py-4 rounded-2xl text-lg hover:bg-black hover:text-white transition">
              Hire Workers 招聘员工
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-gray-600 mt-2">Workers Supplied</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-4xl font-bold">24H</h3>
              <p className="text-gray-600 mt-2">Fast Response</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-4xl font-bold">SG</h3>
              <p className="text-gray-600 mt-2">Singapore Based</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-4xl font-bold">WP/SP</h3>
              <p className="text-gray-600 mt-2">Work Pass Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Our Services 我们的服务
            </h2>
            <p className="text-gray-600 text-lg">
              Recruitment solutions for multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">
                Manufacturing 制造业
              </h3>
              <p className="text-gray-600 leading-7">
                Welders, CNC operators, general workers, installers, warehouse
                assistants and more.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">
                Service Industry 服务业
              </h3>
              <p className="text-gray-600 leading-7">
                Kitchen helpers, restaurant staff, cleaners, retail assistants,
                and customer service personnel.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">
                Fast Matching 快速匹配
              </h3>
              <p className="text-gray-600 leading-7">
                Workers currently in Singapore available for immediate interview
                and trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-3">
                Latest Jobs 最新职位
              </h2>
              <p className="text-gray-600 text-lg">
                Updated recruitment opportunities
              </p>
            </div>

            <button className="border px-5 py-3 rounded-2xl hover:bg-white transition">
              View All 查看全部
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition"
              >
                <div className="mb-5 inline-block bg-black text-white text-sm px-4 py-2 rounded-full">
                  {job.type}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>

                <p className="text-gray-500 mb-8">
                  Salary 薪资: {job.salary}
                </p>

                <button className="w-full bg-black text-white py-3 rounded-2xl hover:opacity-90 transition">
                  Apply Now 立即申请
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Looking for Workers?
            <br />
            寻找员工？
          </h2>

          <p className="text-xl text-gray-300 leading-9 mb-10">
            Contact us today for manpower support and recruitment services.
            <br />
            今天联系我们，快速安排工人与招聘服务。
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition">
              WhatsApp Us
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition">
              Email Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 text-center text-gray-500">
        <p className="font-medium">
          SG UPAY TECHNOLOGY DEVELOPMENT PTE LTD
        </p>
        <p className="mt-2">
          Singapore Recruitment • Manufacturing • Service Industry
        </p>
      </footer>
    </div>
  );
}
