import holyGrail from "../styles/HolyGrail.module.css";
import Layout from "../components/Layout";
import SvgResume from "../components/SvgResume";

export default function Home() {
  const positionSvg = {
    textAlign: "center",
    marginTop: "100px",
  };

  return (
    <Layout>
      <div style={positionSvg}>
        <SvgResume/>
      </div>
    </Layout>
  );
}
