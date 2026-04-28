'use client'
import BlogListingPage from "@/components/blogs";
import Portfolio from "@/components/mypage";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Card1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Card2",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Card3",
      text: "I am changed",
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className="max-w-7xl mx-auto p-4">
        <main className="w-full flex flex-col gap-8">
          <BlogListingPage />
          <section className="flex flex-col gap-16">
            <h2 className="text-4xl font-bold text-yellow-500">Testimonials</h2>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-8 rounded-lg shadow-md w-full md:w-1/3"
                >
                  <p className="text-lg font-bold text-white">{testimonial.name}</p>
                  <p className="">{testimonial.text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <input
                type="search"
                placeholder="Search Blog or Testimonial"
                className="bg-gray-700 border border-gray-500 text-gray-300 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5"
              />
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Read More
              </button>
            </div>
          </section>
          {/* <Portfolio /> */}
        </main>
        <footer className="bg-gray-700 p-4 text-white mt-8">
          &copy; 2023 Your Company
        </footer>
      </Container>
    </ThemeProvider>
  );
}
```

```bash
npm install @mui/material @emotion/react @emotion/styled