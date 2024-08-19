import SilveEurosText from "../../GeneralComponents/SilveEurosText/SilveEurosText";
import useMyContext from "../../useMyContext";
import { IoCopyOutline } from "react-icons/io5";
import { copyToClipboard } from "../../util";

const SilvEuroWithTitle = ({ title, value, size, ...rest }) => {
  const { theme, isMobile } = useMyContext();

  const styles = {
    title: {
      fontSize: `${size / 2}px`,
      color: theme.sText,
    },
  };

  return (
    <>
      <div style={styles.title}>{title}</div>
      <SilveEurosText post={value} size={size} {...rest} />
    </>
  );
};

const Detail = ({ detail }) => {
  const { theme } = useMyContext();

  const styles = {
    detail: {
      fontSize: "1em",
      color: theme.pText,
      lineHeight: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "10px",
      alignItems: "center",
    },
    detailText: {
      display: "flex",
      flexDirection: "column",
    },
    detailCopy: {
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.detail} key={detail.detail}>
      <div style={styles.detailText}>
        <span style={{ color: theme.sText, fontSize: "0.8em" }}>
          {detail.detail}
        </span>{" "}
        {detail.value}
      </div>
      <div
        style={styles.detailCopy}
        onClick={() => {
          copyToClipboard(detail.value);
        }}
      >
        <IoCopyOutline size={20} color={theme.pText} />
      </div>
    </div>
  );
};

const AccountSummary = ({
  balance = 5622,
  day = 6,
  week = 35,
  month = 101,
  year = 844,
}) => {
  const { theme, isMobile } = useMyContext();

  const styles = {
    accountSummary: {
      width: "100%",
      backgroundColor: theme.secondary,
      border: "2px solid " + theme.accent,
      padding: "20px",
      paddingBottom: "10px",
      borderRadius: "10px",
      textAlign: "center",
    },
    summary: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    stats: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "center" : "space-between",
    },
    balance: {
      display: "flex",
      flexDirection: "column",
      width: isMobile ? "100%" : "40%",
    },
    insights: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      width: isMobile ? "100%" : "55%",
      gap: "10px",
    },
    insightStat: {
      width: "40%",
    },
    details: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  };

  const details = [
    {
      detail: "Account Name",
      value: "John Doe",
    },
    {
      detail: "Account Number",
      value: "1234567890",
    },
    {
      detail: "Sort Code",
      value: "12-34-56",
    },
  ];

  const insights = [
    {
      name: "Last Day",
      value: day,
      pre: "-",
    },
    {
      name: "Last Week",
      value: week,
      pre: "-",
    },
    {
      name: "Last Month",
      value: month,
      pre: "-",
    },
    {
      name: "Last Year",
      value: year,
      pre: "-",
    },
  ];

  return (
    <div style={styles.accountSummary}>
      <div style={styles.summary}>
        <div style={styles.stats}>
          <div style={styles.balance}>
            <SilvEuroWithTitle
              title={"Balance"}
              value={balance}
              size={isMobile ? 40 : 60}
              pre={""}
            />
          </div>
          <div style={styles.insights}>
            {insights.map((insight) => {
              return (
                <div style={styles.insightStat}>
                  <SilvEuroWithTitle
                    title={insight.name}
                    value={insight.value}
                    size={isMobile ? 20 : 30}
                    pre={insight.pre}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div style={styles.details}>
          {details.map((detail) => {
            return <Detail detail={detail} key={detail.detail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
