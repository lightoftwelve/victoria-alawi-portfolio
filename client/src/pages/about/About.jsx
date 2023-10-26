import ProfileCard from "../../components/about/ProfileCard";
import { profileData } from "../../components/about/data/profileData";
import Waves from "../../components/about/Waves";

export default function About() {
  return (
    <section className="aboutPageWrapper">
      <ProfileCard profile={profileData} />
      <Waves />
    </section>
  );
}
