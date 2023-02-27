
import './App.css';
import flow from "./pr1.png";
import ex1 from "./ex1.png";
import ex2 from "./ex2.png";


function App() {
  return (
    <div className="App">
          <header className="App-header">
              
              <hr style={{ color: "black", background: "black", height: "1.5px" }} />
              <hr style={{ color: "black", background: "black", height: "3px" }} />
              <h2 style={{ color: "black", textAlign:"center",fontFamily: "Times New Roman" }}>
                  Noise-Suppressing Dark Image Enhancement Algorithm Through MATLAB Apps</h2>
              <hr style={{ color: "black",background:"black", height: "3px" }} />
              <hr style={{ color: "black", background: "black", height: "1.5px" }} />
              <p style={{ color: "black", textAlign: "center", fontFamily: "Times New Roman" }}>
                  Manvi Jha and Ashish Kumar Bhandari</p>
              <div class="card">
                  <p style={{ color: "white", textAlign: "center" }}><button style={{ fontSize: "30pt", fontFamily: "Times New Roman"}}>ABSTRACT</button></p>
                  
                  <p style={{ fontFamily: "Times New Roman",textAlign:"justify",padding:"2%", paddingBottom:"0"}}>With the ever-increasing dependence of technological advancements
                      on captured images has made image enhancement a concern of principal importance.
                      The crucial information veiled by nighttime scenes expresses a huge scope to enhance
                      them and bring forth the information hidden in their dark background. The information
                      shadowed in these nighttime scenes is also prone to the inevitable inclusion of noise
                      while enhancing them. The images captured using various devices thus present a mammoth
                      challenge of enhancement before further utilization. This work proposes a noise-suppressing
                      dark image enhancement for web apps (NSDIE) a low-rank model with simultaneous enhancement
                      of reflectance and illumination components to improve the nighttime scenes while also
                      eradicating the present noise of the image. The reflectance component is further processed
                      using a multiscale retinex model to compensate for the possible color distortions while the
                      illumination component is enhanced using the camera response model to ensure the genuineness
                      of the scene. The proposed scheme is then packaged into a web app to aid the concerns of dark
                      image enhancement in daily life of consumers. Extensive quantitative and qualitative analysis
                      validates the superiority of NSDIE over various state-of-art techniques.</p>
                  <p class="title" style={{ textAlign: "left", padding: "2%" }}>Index Terms - Image enhancement, nighttime scenes,
                      multiscale retinex model, camera response function.</p>
                                 
              </div>
              <div class="card">
                  <p style={{ color: "white", textAlign: "center" }}><button style={{ fontSize: "30pt", fontFamily: "Times New Roman" }}>
                      PROPOSED METHOD</button></p>
                  <img src={flow} style={{padding: "2%" }} alt="Flow-Chart of proposed Method" className="img-fluid" />
              </div>
              <div class="card">
                  <p style={{ color: "white", textAlign: "center" }}><button style={{ fontSize: "30pt", fontFamily: "Times New Roman" }}>
                      EXAMPLES</button></p>
                  <img src={ex1} style={{ padding: "2%" }} alt="Example of proposed Method" className="img-fluid" />
                  <img src={ex2} style={{ padding: "2%" }} alt="Example of proposed Method" className="img-fluid" />
                  
              </div>
              <div class="card">
                  <p style={{ color: "white", textAlign: "center" }}><button style={{ fontSize: "30pt", fontFamily: "Times New Roman" }}>
                      DOWNLOAD MATLAB APP</button></p>
                  <p style={{ fontFamily: "Times New Roman", fontSize: "15pt", textAlign: "justify", padding: "2%", paddingBottom: "0" }}>
                      Download the ..mlappinstall folder containing the Matlab App by clicking on the option below.
                      <br /> The Download should begin instantly.
                      <br /> After downlading completes, locate the file through an ongoing MatLab session <br />
                                           Upon opening it through a MatLab session, a promt will pop-up asking for installation. This will take about a minute.<br />
                      After the installation completes, the app gets added to the APPS section in MatLab environment and can be used
                      anytime by clicking on the icon.
                                 </p>
                  <p style={{ color: "white", textAlign: "center" }}><button2 style={{ fontSize: "30pt", color: "black", background: "white", fontFamily: "Times New Roman" }}>
                      <a href="NSDIE_APP_1.mlappinstall" download>DOWNLOAD .mlappinstall File</a></button2></p>
              </div>
              <div class="card">
                  <p style={{ color: "white", textAlign: "center" }}><button style={{ fontSize: "30pt", fontFamily: "Times New Roman" }}>
                      DOWNLOAD STANDALONE APP</button></p>
                  <p style={{ fontFamily: "Times New Roman", fontSize:"15pt", textAlign: "justify", padding: "2%", paddingBottom: "0" }}>
                      Download the .zip folder containing the Matlab App by clicking on the option below.
                      <br /> The Download should begin instantly.
                      <br /> After downlading completes, unzip the folder and locate, "for_redistribution_only_files". <br />
                      Run the .exe file inside the folder to install and open the stanadlone app for the proposed algorithm.. <br /> For users who do not have
                      MATLAB runtime, Run the .exe file inside folder namned
                      "for_redistribution" first and then proceed as the previous step.                  </p>
                  <p style={{ color: "white", textAlign: "center" }}><button2 style={{ fontSize: "30pt",color:"black", background:"white",fontFamily: "Times New Roman" }}>
                      <a href="NSDIE_APP.zip" download> DOWNLOAD .zip File</a></button2></p>
              </div>
              
      </header>
    </div>
  );
}

export default App;
