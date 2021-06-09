// import HocWindowSize from "./Logic/Hoc/HocWindowSize";
// import "./App.css";

// function App({ width, height }) {
//   return (
//     <div className="App">
//       <div>width:{width}</div>
//       <div>height:{height}</div>
//     </div>
//   );
// }

// export default HocWindowSize(App);

// import RPWindowSize from "./Logic/RP/RPWindowSize";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <RPWindowSize
//         render={(width, height) => {
//           return (
//             <>
//               <div>width:{width}</div>
//               <div>height:{height}</div>
//             </>
//           );
//         }}
//       />
//     </div>
//   );
// }

// export default App;

// import RPWindowSizeFunc from "./Logic/RP/RPWindowSizeFunc";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <RPWindowSizeFunc>
//         {(width, height) => {
//           return (
//             <>
//               <div>width:{width}</div>
//               <div>height:{height}</div>
//             </>
//           );
//         }}
//       </RPWindowSizeFunc>
//     </div>
//   );
// }

// export default App;

import useWindowSize from "./Logic/Hook/useWindowSize";
import "./App.css";

function App() {
  const { width, height } = useWindowSize();
  return (
    <div className="App">
      <div>width:{width}</div>
      <div>height:{height}</div>
    </div>
  );
}

export default App;
