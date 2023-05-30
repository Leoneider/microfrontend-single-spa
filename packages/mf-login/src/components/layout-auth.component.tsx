import { Outlet } from "react-router-dom";

export default function LayoutAuth() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0 d-none d-lg-block bg-info">
          <div className="vh-100 d-flex align-items-center">
            <img
              className="img-fluid"
              src="https://saqamicrofrontends.blob.core.windows.net/assets/images/campaign_logo.png"
              alt="image-campaign"
            />
          </div>
        </div>
        <div className="col p-0">
          <div className="vh-100 bg-light d-flex align-items-center justify-content-center">
            <div className="card" style={{ maxWidth: "389px" }}>
              <div className="card-body">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
