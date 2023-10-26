import portfolioData from "../../components/portfolio/data/portfolioData.json";
import Project from "../../components/portfolio/Project";

export default function Portfolio() {
  return (
    <section className="portfolioWrapper">
      <Project portfolio={portfolioData} />;
    </section>
  );
}
