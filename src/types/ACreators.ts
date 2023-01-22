export type ACreators< R extends Record< string, Record< string, unknown > > > = {
  [ K in keyof R ]: R[ K ] extends { payload: unknown }
    ? ( p: R[ K ][ 'payload' ] ) => R[ K ]
    : () => R[ K ]
};
