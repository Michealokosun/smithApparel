import { Collectionlist } from "../../componets/collectionlist.component";
import { Route, Routes } from "react-router-dom";
import { SingleCollection } from "../single-collection-preview/single-collection-page";

export const Shoppage = () => {
  return (
    <>
      <Routes>
        <Route index element={<Collectionlist />} />
        <Route path="/:collectionName" element={<SingleCollection />} />
      </Routes>
    </>
  );
};
