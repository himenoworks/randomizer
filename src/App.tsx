import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

import ApplicationRoute from "./routes";

const App: FC = () => {
   return <ApplicationRoute />;
};

export default App;
library.add(fab, fas, far);
