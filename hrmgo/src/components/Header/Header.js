import React from "react";

const Header = () => {
  const handleLogout = (event) => {
    event.preventDefault();
    document.getElementById("logout-form").submit();
  };

  return (
    <header className="dash-header transprent-bg">
      <div className="header-wrapper">
        <div className="me-auto dash-mob-drp">
          <ul className="list-unstyled">
            <li className="dash-h-item mob-hamburger">
              <a href="#!" className="dash-head-link" id="mobile-collapse">
                <div className="hamburger hamburger--arrowturn">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </a>
            </li>

            <li className="dropdown dash-h-item drp-company">
              <a
                className="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span className="theme-avtar">
                  <img
                    alt="User Avatar"
                    src="https://demo.workdo.io/hrmgo/storage/uploads/avatar//owner.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: "100%" }}
                  />
                </span>
                <span className="hide-mob ms-2">
                  Hi, Rajodiya Infotech!
                  <i className="ti ti-chevron-down drp-arrow nocolor hide-mob"></i>
                </span>
              </a>
              <div className="dropdown-menu dash-h-dropdown">
                <a
                  href="https://demo.workdo.io/hrmgo/profile"
                  className="dropdown-item"
                >
                  <i className="ti ti-user"></i>
                  <span>My Profile</span>
                </a>

                <a
                  href="https://demo.workdo.io/hrmgo/logout"
                  className="dropdown-item"
                  onClick={handleLogout}
                >
                  <i className="ti ti-power"></i>
                  <span>Logout</span>
                </a>
                <form
                  id="logout-form"
                  action="https://demo.workdo.io/hrmgo/logout"
                  method="POST"
                  style={{ display: "none" }}
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="pkX4v0W6csqzjuYqeZpAhGPsJWaWz4kwSn169bGi"
                    autoComplete="off"
                  />
                </form>
              </div>
            </li>
          </ul>
        </div>

        <div className="ms-auto">
          <ul className="list-unstyled">
            <li className="dash-h-item">
              <a
                className="dash-head-link me-0"
                href="https://demo.workdo.io/hrmgo/chats"
              >
                <i className="ti ti-message-circle"></i>
                <span className="bg-danger dash-h-badge message-counter custom_messanger_counter">
                  0<span className="sr-only"></span>
                </span>
              </a>
            </li>

            <li className="dropdown dash-h-item drp-notification">
              <a
                className="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ti ti-message-2"></i>
                <span className="bg-danger dash-h-badge message-counter custom_messanger_counter">
                  0<span className="sr-only"></span>
                </span>
              </a>
              <div className="dropdown-menu dash-h-dropdown dropdown-menu-end">
                <div className="noti-header">
                  <h5 className="m-0">Messages</h5>
                  <a
                    href="#"
                    className="dash-head-link mark_all_as_read_message"
                  >
                    Clear All
                  </a>
                </div>
                <div className="noti-body dropdown-list-message-msg">
                  <table className="count-listOfContacts"></table>
                </div>
                <div className="noti-footer">
                  <div className="d-grid">
                    <a
                      href="https://demo.workdo.io/hrmgo/chats"
                      className="btn dash-head-link justify-content-center text-primary mx-0"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown dash-h-item drp-language">
              <a
                className="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                id="dropdownLanguage"
              >
                <i className="ti ti-world nocolor"></i>
                <span className="drp-text hide-mob">English</span>
                <i className="ti ti-chevron-down drp-arrow nocolor"></i>
              </a>
              <div
                className="dropdown-menu dash-h-dropdown dropdown-menu-end"
                aria-labelledby="dropdownLanguage"
              >
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/ar"
                  className="dropdown-item "
                >
                  <span>Arabic</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/zh"
                  className="dropdown-item "
                >
                  <span>Chinese</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/da"
                  className="dropdown-item "
                >
                  <span>Danish</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/de"
                  className="dropdown-item "
                >
                  <span>German</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/en"
                  className="dropdown-item text-primary"
                >
                  <span>English</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/es"
                  className="dropdown-item "
                >
                  <span>Spanish</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/fr"
                  className="dropdown-item "
                >
                  <span>French</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/he"
                  className="dropdown-item "
                >
                  <span>Hebrew</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/it"
                  className="dropdown-item "
                >
                  <span>Italian</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/ja"
                  className="dropdown-item "
                >
                  <span>Japanese</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/nl"
                  className="dropdown-item "
                >
                  <span>Dutch</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/pl"
                  className="dropdown-item "
                >
                  <span>Polish</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/pt"
                  className="dropdown-item "
                >
                  <span>Portuguese</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/ru"
                  className="dropdown-item "
                >
                  <span>Russian</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/tr"
                  className="dropdown-item "
                >
                  <span>Turkish</span>
                </a>
                <a
                  href="https://demo.workdo.io/hrmgo/change-language/pt-br"
                  className="dropdown-item "
                >
                  <span>Portuguese(Brazil)</span>
                </a>

                <div className="dropdown-divider m-0"></div>
                <a
                  href="#"
                  className="dropdown-item text-primary"
                  data-size="md"
                  data-url="https://demo.workdo.io/hrmgo/create-language"
                  data-ajax-popup="true"
                  data-title="Create New Language"
                  data-bs-toggle="tooltip"
                >
                  Create Language
                </a>
                <div className="dropdown-divider m-0"></div>
                <a
                  href="https://demo.workdo.io/hrmgo/manage-language/en"
                  className="dropdown-item text-primary"
                >
                  Manage Language
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
