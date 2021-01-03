interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'herllon@herllon.com.br',
      name: 'Herllon GoBarber',
      region: process.env.AWS_DEFAULT_REGION,
    },
  },
} as IMailConfig;
