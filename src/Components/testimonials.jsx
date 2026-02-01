import { testimonialsData } from "../data/testimonials";

const Testimonials = () => {
    return (
        <section id={testimonialsData.sectionId} className="py-16 dark:bg-black">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <button className="mt-10 rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white">
                        {testimonialsData.title}
                    </button>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                        {testimonialsData.subtitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
                    {testimonialsData.testimonials.map((testimonial, index) => (
                        <div key={index} className="h-full w-full max-w-sm">
                            <div className="flex h-full flex-col rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-white/5 dark:shadow-none">
                                <img
                                    src={testimonial.avatar}
                                    className="mx-auto mb-4 h-[100px] w-[100px] rounded-full object-cover"
                                    loading="lazy"
                                    alt={testimonial.avatarAlt}
                                />

                                <blockquote className="mb-4 text-gray-700 dark:text-gray-300">
                                    <p className="leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                </blockquote>

                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {testimonial.name}
                                </h5>

                                <p className="mt-1 text-gray-500 dark:text-gray-400">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;