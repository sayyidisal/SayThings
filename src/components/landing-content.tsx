"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";


const testimonials = [
  {
    name: "Robert Downey Jr",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/440px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
    title: "Iron Man",
    description: "This is the best application I've used",
  },
  {
    name: "Chris Evans",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BNzQ0YWM1ODEtZDFkYy00MGJhLTkwZDUtMzVkZjljODU3ZTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Captain America",
    description: "An amazing app that makes life easier!",
  },
  {
    name: "Scarlett Johansson",
    avatar:
      "https://images.harpersbazaar.co.id/unsafe/500x500/smart/media/body_b8dbe397f10d416eb509137c3cc8d103.jpg",
    title: "Black Widow",
    description: "Intuitive and user-friendly, I love it!",
  },
  {
    name: "Chris Hemsworth",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/440px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg",
    title: "Thor",
    description: "A powerful tool that's truly worthy!",
  },
  {
    name: "Mark Ruffalo",
    avatar:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNYJh4RXVP9KMtul6klCOMJs269Z01AVTkEvjhwu6g9Pjjj1GYOK-31yipPTKvRpAm_x-oQ7HIeQyyrTqyLPhmWZC3qaWoNN3-8Es6c1zE60s-xtHQlirmwbZlPbYTKcCrnoLjud3mApE/s400/mark_ruffalo_300.jpg",
    title: "Hulk",
    description: "Smashingly good and reliable!",
  },
  {
    name: "Tom Holland",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg/440px-Tom_Holland_MTV_2018_%2802%29.jpg",
    title: "Spider-Man",
    description: "Great design and functionality, highly recommend!",
  },
  {
    name: "Benedict Cumberbatch",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/BCumberbatch_Comic-Con_2019.jpg/440px-BCumberbatch_Comic-Con_2019.jpg",
    title: "Doctor Strange",
    description: "A magical experience that's a must-try.",
  },
  {
    name: "Brie Larson",
    avatar:
      "https://assets.vogue.in/photos/5ce3f549ad9a2128bdb3eddb/2:3/w_2560%2Cc_limit/Heres-How-Brie-Larson-Trained-to-Play-Captain-Marvel.jpg",
    title: "Captain Marvel",
    description: "Effortlessly gets the job done, great app!",
  },
  {
    name: "Jeremy Renner",
    avatar:
      "https://cdn.britannica.com/34/218334-050-759D83D7/American-actor-Jeremy-Renner-2017.jpg",
    title: "Hawkeye",
    description: "Sharp, precise, and always on target.",
  },
  {
    name: "Samuel L. Jackson",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/440px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg",
    title: "Nick Fury",
    description: "This app is the secret to success!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48} // Adjust to your preferred size
                  height={48} // Adjust to your preferred size
                  className="rounded-full object-cover"
                  placeholder="blur" // Optional: Enable blur-up placeholder
                  blurDataURL="/path/to/placeholder-image.jpg" // Optional: Fallback image
                />
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
