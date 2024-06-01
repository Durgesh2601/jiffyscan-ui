import currencyLogo from "../../assets/usdc.svg";
import trophy from "../../assets/trophy.svg";
import { TAG_COLORS_MAP } from "../../constants";

const ContentItem = ({ item = null }) => {
  if (!item) return null;
  return (
    <div className="tab-content">
      <div class="card">
        <div class="icon">
          <img src={item?.logo} alt="event-logo" />
        </div>
        <div class="content">
          <h2>
            {item?.name}
            <small className="subtext v-small"> by </small>
            <small className="subtext">{item?.organizer}</small>
          </h2>
          <div class="meta">
            {item?.token?.value ? (
              <span>
                <img src={currencyLogo} alt="currency" />
                <strong>{item?.token?.value} </strong>
                <span className="subtext">{item?.token?.currency}</span>
              </span>
            ) : null}
            <span>
              <img src={trophy} alt="trophy" />
              1st Place
            </span>
            {Boolean(item?.filters?.length) && (
              <div className="content-filters">
                {item?.filters?.map((filter) => (
                  <div
                    class="tag"
                    key={filter}
                    style={{
                      ...(TAG_COLORS_MAP[filter] || {}),
                    }}
                  >
                    {filter}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div class="meta">
          <div className="subtext">{item?.organized_date || "--"}</div>
          {item?.participants ? (
            <span className="meta-sub">
              {item?.participants}
              <span className="subtext"> Participants</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
