import { FocusCards } from "@/components/ui/focus-cards";

function Skills() {
  const cards = [
    {
      title: "Html",
      src: "https://img.icons8.com/?size=60&id=20909&format=png&color=000000",
    },
    {
      title: "Css",
      src: "https://img.icons8.com/?size=60&id=21278&format=png&color=000000",
    },
    {
      
      title: "Tailwind",
      src: "https://img.icons8.com/?size=60&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
    {
      title: "Javascript",
      src: "https://img.icons8.com/?size=60&id=108784&format=png&color=000000",
    },
    {
      title: "React",
      src: "https://img.icons8.com/?size=60&id=asWSSTBrDlTW&format=png&color=000000",
    },
    {
      title: "Next",
      src: "https://img.icons8.com/?size=60&id=MWiBjkuHeMVq&format=png&color=000000",
    },
    {
      title: "Express",
      src: "https://img.icons8.com/?size=60&id=WNoJgbzDr3i2&format=png&color=000000",
    },
    {
      title: "Node",
      src: "https://img.icons8.com/?size=60&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      title: "Mongodb",
      src: "https://img.icons8.com/?size=60&id=bosfpvRzNOG8&format=png&color=000000",
    },
    {
      title: "Mysql",
      src: "https://img.icons8.com/?size=30&id=rgPSE6nAB766&format=png&color=000000",
    },
    {
      title: "Java",
      src: "https://img.icons8.com/?size=70&id=Pd2x9GWu9ovX&format=png&color=000000",
    },
   
    {
      title: "Supabase",
      src: "https://img.icons8.com/?size=60&id=grZaE9tjqDyr&format=png&color=000000",
    },
    
  ];

  return <FocusCards cards={cards} />;
}

export default Skills;