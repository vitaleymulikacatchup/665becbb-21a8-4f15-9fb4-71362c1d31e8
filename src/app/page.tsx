"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { id: "heroImage", url: "https://images.pexels.com/photos/165844/noodles-tagliatelle-raw-colorful-165844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Vibrant multicolored nests of raw pasta on a light surface, showcasing a variety of flavors." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of hands making fresh pasta, showcasing artisanal techniques and ingredients." },
  { id: "contactImage", url: "https://images.pexels.com/photos/6287297/pexels-photo-6287297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Hands kneading dough with eggs and flour for homemade pasta in a kitchen setting." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pasta Paradise"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Pasta Paradise"
            description="Discover the art of authentic pasta."
            imageSrc="https://images.pexels.com/photos/165844/noodles-tagliatelle-raw-colorful-165844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Explore Menu", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]}
            className="bg-pink-100"
            textBoxClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Fresh Ingredients", description: "Sourced locally every day.", icon: "Leaf" },
              { title: "Passionate Chefs", description: "Crafting perfection in every dish." }
            ]}
            imageSrc="https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-pink-100"
            contentClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Spaghetti Carbonara", price: "$12", imageSrc: "https://images.pexels.com/photos/165844/noodles-tagliatelle-raw-colorful-165844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Penne Arrabbiata", price: "$10", imageSrc: "https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", name: "Fettuccine Alfredo", price: "$14", imageSrc: "https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
            title="Featured Dishes"
            className="bg-pink-100"
            cardClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Us"
            description="Reach out to us for more information."
            imageSrc="https://images.pexels.com/photos/6287297/pexels-photo-6287297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-pink-100"
            contentClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [
                { label: "About Us", href: "about" },
                { label: "Menu", href: "menu" },
                { label: "Contact", href: "contact" }
              ] }
            ]}
            logoText="Pasta Paradise"
            className="bg-pink-100"
            itemClassName="text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}