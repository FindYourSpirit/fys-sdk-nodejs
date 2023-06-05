class SdkConfiguration {
    constructor(apiKey, environment, jwtToken, clientID, version) {
        this.ApiKey = apiKey;
        this.Environment = environment;
        this.JwtToken = jwtToken;
        this.ClientID = clientID;
        this.Version = version;
    }

    GetBaseUrl() {
        switch (this.Environment) {
            case EnvironmentType.Live:
                return `https://api.live.fysapp.co/${this.Version}`;
            case EnvironmentType.Test:
                return `https://api.test.fysapp.co/${this.Version}`;
            default:
                throw new Error("Invalid environment specified.");
        }
    }
}

const EnvironmentType = {
    Live: 'Live',
    Test: 'Test'
};

module.exports = { SdkConfiguration, EnvironmentType };
