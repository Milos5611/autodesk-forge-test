let {
    APS_CLIENT_ID = "fzEQEvmWOW7PmdsqqGTB67tF5EKlg8WF",
    APS_CLIENT_SECRET = "v0zcgUHqwjmATt4J",
    APS_BUCKET = undefined, PORT
} = process.env;
if (!APS_CLIENT_ID || !APS_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
APS_BUCKET = APS_BUCKET || `${APS_CLIENT_ID.toLowerCase()}-basic-app`;
PORT = PORT || 8080;

module.exports = {
    APS_CLIENT_ID,
    APS_CLIENT_SECRET,
    APS_BUCKET,
    PORT
};
