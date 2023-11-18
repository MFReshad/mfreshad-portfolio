"use client";
import React, { useTransition, useState,  } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>
          <span className="text-[#3AAFA9]">Languages</span>
          <br />
          <p>
            C++ | Java | Python | C# | Markup Language (HTML | CSS) | Scripting
            Language (PHP | JavaScript)
          </p>
        </li>
        <li>
          <span className="text-[#3AAFA9]">Databases</span>
          <br />
          <p>MySQL | MSSQL | NoSQL(Firebase)</p>
        </li>
        <li>
          <span className=" text-[#3AAFA9] ">Libraries</span>
          <br />
          <p>Tensorflow | Keras | Pandas | NumPy | PyTorch | Matplotlib</p>
        </li>
        <li>
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
      <ul className="list-disc pl-4">
        <li>
          <span className="text-[#3AAFA9]">University</span>
          <br />
          <p>
            Ahsanullah University of Science & Technology, Dhaka
          </p>
          <i style={{ fontSize: 14 }}>Computer Science & Engineering . Bachelor Of Science (B.Sc)</i>
        </li>
        <li>
          <span className="text-[#3AAFA9]">College</span>
          <br />
          <p>
            Bogura Cantonment Public School & College, Bogura
          </p>
          <i style={{ fontSize: 14 }}>Science . Higher Secondary School Certificate(H.S.C)</i>
        </li>
        <li>
          <span className="text-[#3AAFA9]">School</span>
          <br />
          <p>
            Bogura Cantonment Public School & College, Bogura
          </p>
          <i style={{ fontSize: 14 }}>Science . Secondary School Certificate(S.S.C)</i>
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-4">
        <li> Coming Soon</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src="/images/croped.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            hello I am Reshad... md:grid md:grid-cols-2 gap-8 items-center py-8
            px-4 xl:gap-16 sm:py-16 xl:px-16 Lorem ipsum In publishing and
            graphic design.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
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
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
