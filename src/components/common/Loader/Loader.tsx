import React from "react";
import { LoaderType } from "../../../types/GlobalTypes";
import { icoLoader } from "../../../assets";

const Loader = (props: LoaderType): JSX.Element => {
  return (
    <>
      {props.loading ? (
        <div>
          <div className="newloader-style">
            <div style={{ textAlign: "center" }}>
              <div>
                <img alt={"LoaderImage"} src={icoLoader} />
              </div>
            </div>
            <div className="loader-container-inner"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;