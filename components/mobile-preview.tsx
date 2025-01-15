"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const screenshots = [
  {
    url: "https://spintop.fra1.cdn.digitaloceanspaces.com/games/rage-effect/800x528_game_detail_gallery_rage_effect_retina_1.jpg",
    alt: "Gameplay Screenshot 1",
  },
  {
    url: "https://www.rageeffect.io/img/aboutImg2.png",
    alt: "Gameplay Screenshot 2",
  },
  {
    url: "https://pbs.twimg.com/media/GgDr-_qXgAAWquP?format=jpg&name=large",
    alt: "Gameplay Screenshot 3",
  },
];

const reviews = [
  { author: "Gamer BD", rating: 5, text: "Best mobile FPS I've played!" },
  { author: "bobby", rating: 5, text: "Amazing graphics and gameplay" },
  { author: "remo", rating: 4, text: "Great game, constant updates" },
];

export default function MobilePreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-wider font-orbitron text-red-500 mb-4">
            MOBILE WARFARE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience console-quality graphics and gameplay on your mobile
            device
          </p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="relative mb-16">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-none w-80 first:ml-4 last:mr-4"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                  <img
                    src={screenshot.url || "/placeholder.svg"}
                    alt={screenshot.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/50 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.text}</p>
              <p className="text-sm text-gray-500">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
