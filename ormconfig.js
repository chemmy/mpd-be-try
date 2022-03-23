const dbConfig = {
  synchronize: false,
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mpd',
      autoLoadEntities: true,
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mpdtest',
      autoLoadEntities: true,
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'mpd-test.cjzara2gjlrs.ap-southeast-2.rds.amazonaws.com',
      port: 5432,
      username: 'dbadmin',
      password: 'gn6FW4HUbz2tkKQa',
      database: 'mpd',
      autoLoadEntities: true,
      entities: ['**/*.entity.ts'],
    });
    break;
  default:
    throw new Error('Unknown Environment');
}
