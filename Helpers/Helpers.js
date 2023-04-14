class Helpers{
    // Some Default Constant
    static URL = "https://lucas-app.hasura.app/api/rest/";
    static TOKEN = "ADj87oiwndN4OCvHkWtezug7w0jiHWOyc1oAZapmwmXowqb01tDLY93TLuO1FLAl";
    static defaultHeaders = {
        'Accept': 'application/json',
        'x-hasura-admin-secret': this.TOKEN,
    };
}

export default Helpers;