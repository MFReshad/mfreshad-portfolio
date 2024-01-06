"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li className="py-1">
          <span className="text-[#3AAFA9]">Languages</span>
          <br />
          <p>
            C++ | Java | Python | C# | Markup Language (HTML | CSS) | Scripting
            Language (PHP | JavaScript)
          </p>
        </li>
        <li className="py-1">
          <span className="text-[#3AAFA9]">Databases</span>
          <br />
          <p>MySQL | MSSQL | NoSQL(Firebase)</p>
        </li>
        <li className="py-1">
          <span className=" text-[#3AAFA9] ">Libraries</span>
          <br />
          <p>Tensorflow | Keras | Pandas | NumPy | PyTorch | Matplotlib</p>
        </li>
        <li className="py-1">
          <span className="text-[#3AAFA9]">Frameworks</span>
          <br />
          <p>ASP.net | ASP.core</p>
        </li>
        <li>
          <span className="text-[#3AAFA9]">Developer Tools</span>
          <br />
          <p>
            Git | Google Colab | Kaggle | Android studio | MATLAB | VS Code,
            Visual Studio | NetBeans | XAMPP
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul //className="list-disc pl-4"
      >
        <li className="py-1">
          <span className="text-[#3AAFA9]">University</span>
          <br />
          <p>Ahsanullah University of Science & Technology, Dhaka</p>
          <i style={{ fontSize: 12 }}>
            Computer Science & Engineering . Bachelor Of Science (B.Sc)
          </i>
        </li>
        <li className="py-1">
          <span className="text-[#3AAFA9]">College</span>
          <br />
          <p>Bogura Cantonment Public School & College, Bogura</p>
          <i style={{ fontSize: 12 }}>
            Science . Higher Secondary School Certificate(H.S.C)
          </i>
        </li>
        <li className="py-1">
          <span className="text-[#3AAFA9]">School</span>
          <br />
          <p>Bogura Cantonment Public School & College, Bogura</p>
          <i style={{ fontSize: 12 }}>
            Science . Secondary School Certificate(S.S.C)
          </i>
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul //className="list-disc pl-4"
      >
        <li className="py-1">
          <span className="text-[#3AAFA9]">
            Field Of Natural Language Processing
          </span>
          
          <p>
            A Study on Music Genre Classification And Lyrics Generation of
            Bangla Songs Dataset
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4"
      >
        <li className="py-1">
          <p>
          <span className="text-[#3AAFA9]">
            Intern :-{" "}
          </span> 
            {" "}Asiatic Trade Marketing Service Ltd. 
          </p>
          <i style={{ fontSize: 12 }} className="pl-0 md:pl-15">
            {""}Intern on IT. (Machine learning and development)
          </i><br />
          <i style={{ fontSize: 12 }} className="pl-0  md:pl-15">
            {""}From: Jan-2024
          </i>
        </li>
      </ul>
    ),
  },
  {
    title: "Award",
    id: "award",
    content: (
      <ul className="list-disc pl-4">
        <li className="py-1">
          <a className="text-[#3AAFA9]" href="https://drive.google.com/uc?export=view&id=1KtpFqfcD7qoGI_Wy9Tcw2MaZn99lNKH0">National Education Week -2023</a>
          <br />
          <p>Deshattobodhok songeet (Patriotic song), Nazrulgeeti.</p>
          <i style={{ fontSize: 12 }}>
            Honourable Ex. President Md. Abdul Hamid gave the prize ceremony.
          </i>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-fix py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/cropeddn m.jpeg"
          width={500}
          height={500}
          alt="picture of reshad for about section"
          className="justify"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            hello I am Reshad... I&apos;ve completed my graduation on Computer
            Science & Engineering. Fresher, proficient in web development,
            machine learning, and research. Authored one conference paper in the
            field of NLP. Skilled in various programming languages and various
            libraries. Seeking new opportunities to drive innovation and
            contribute to exciting projects
          </p>
          <div className="max-w-full mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab == "certification"}
            >
              {" "}
              Publication{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab == "experience"}
            >
              {" "}
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("award")}
              active={tab == "award"}
            >
              {" "}
              Award{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
