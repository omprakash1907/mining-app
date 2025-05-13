import { motion } from "framer-motion"

export default function KeyBenefits() {
  const benefits = [
    {
      number: "1",
      title: "This is a title this is a title second line",
      description: "Lorem ipsum dolor sit amet consectetur. Pharetra pulvinar sit in sed elementum. Nullam pellentesque.",
    },
    {
      number: "2",
      title: "This is a title this is a title second line",
      description: "Lorem ipsum dolor sit amet consectetur. Pharetra pulvinar sit in sed elementum. Nullam pellentesque.",
    },
    {
      number: "3",
      title: "This is a title this is a title second line",
      description: "Lorem ipsum dolor sit amet consectetur. Pharetra pulvinar sit in sed elementum. Nullam pellentesque.",
    },
    {
      number: "4",
      title: "This is a title this is a title second line",
      description: "Lorem ipsum dolor sit amet consectetur. Pharetra pulvinar sit in sed elementum. Nullam pellentesque.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-nomral mb-3 text-[#333333] actor-font">Key Benefits</h2>
          <p className="text-gray-600 mb-10 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Duis tempus dolor vitae consectetur. Duis mattis est amet elit quis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex flex-col items-start gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded p-2 bg-white text-gray-800 text-sm font-medium">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1V10C0 10.55 0.45 11 1 11H3V18.15C3 18.66 3.67 18.84 3.93 18.4L9.12 9.5C9.51 8.83 9.03 8 8.26 8H6L8.49 1.35C8.74 0.7 8.26 0 7.56 0H1C0.45 0 0 0.45 0 1Z" fill="#00205B" />
                  </svg>
                </div>
                <h3 className="text-lg text-[#333333] font-bold">{benefit.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
