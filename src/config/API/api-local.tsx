const protocol = 'http';
// const host = 'newbizstart.iptime.org';
const host = '192.168.1.4';
const port = '5002';
const trailUrl = 'api/v1';

const hostUrl = `${protocol}://${host}${port ? ':' + port : ''}/`;
const endpoint = `${protocol}://${host}${(port ? ':' + port : '')}/`;

export default {
    protocol: protocol,
    host: host,
    port: port,
    apiUrl: trailUrl,
    endpoint: endpoint,
    hostUrl: hostUrl,
};
