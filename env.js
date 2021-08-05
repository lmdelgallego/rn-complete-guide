const variables = {
  development: {
    googleApiKey: '',
    mapBoxApiKey:
      'pk.eyJ1IjoiYWx1Y2FyZGx1aXMiLCJhIjoiY2s0cjByOHU4MDA5bzNvbzIyZXVwZDluaCJ9.pZI7p6UAHlUG_3XLfKBAhQ',
  },
  production: {
    googleApiKey: '',
    mapBoxApiKey:
      'pk.eyJ1IjoiYWx1Y2FyZGx1aXMiLCJhIjoiY2s0cjByOHU4MDA5bzNvbzIyZXVwZDluaCJ9.pZI7p6UAHlUG_3XLfKBAhQ',
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development;
  }
  return variables.production;
};

export default getEnvVariables;
