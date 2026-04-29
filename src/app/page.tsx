import Action from "@/components/Action";
import Contact from "@/components/Contact";
import FAQuestion from "@/components/FAQuestion";
import MyProject from "@/components/MyProject";
import MySKill from "@/components/MySKill";
import Services from "@/components/Service";

export default function () {
  return (
    <>
    <MySKill />
    <Services />
    <MyProject />
    <FAQuestion />
    <Action />
    {/** <Contact />  */}
    
    </>
  );
}