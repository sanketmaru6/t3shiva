import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { Briefcase, Smile, Star } from 'lucide-react';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const AnimatedCounter = ({ value, className }: { value: number; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 100, damping: 15 });

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
    return unsubscribe;
  }, [spring]);

  return <span ref={ref} className={className} />;
};

const Statistics = () => {
  const stats = [
    {
      icon: <Briefcase className="w-10 h-10 text-indigo-400" />,
      number: 86,
      suffix: "%",
      description: "Excellence in every project, ensuring client satisfaction.",
      color: "indigo",
    },
    {
      icon: <Smile className="w-10 h-10 text-pink-400" />,
      number: 92,
      suffix: "%",
      description: "Satisfaction rate from our awesome customers worldwide.",
      color: "pink",
    },
    {
      icon: <Star className="w-10 h-10 text-amber-400" />,
      number: 80,
      suffix: "+",
      description: "Average customer ratings across all platforms.",
      color: "amber",
    },
  ];

  const cardColorClasses: Record<string, string> = {
    indigo:
      "from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 hover:border-indigo-500",
    pink:
      "from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 hover:border-pink-500",
    amber:
      "from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 hover:border-amber-500",
  };

  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 dark:opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
            Trusted by Thousands of Happy Customers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to quality and customer satisfaction speaks for itself. See what makes us a preferred choice.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "bg-gradient-to-br p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center border-2 border-transparent",
                cardColorClasses[stat.color]
              )}
            >
              {/* Icon */}
              <div className="mb-5 bg-white/60 dark:bg-gray-800/50 p-4 rounded-full shadow-inner">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 flex items-center">
                <AnimatedCounter value={stat.number} />
                <span className="ml-1">{stat.suffix}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
