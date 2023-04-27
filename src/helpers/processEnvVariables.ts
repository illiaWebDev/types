export type EnvVariables<TVarName extends string> = Record<TVarName, string>;

export function processEnvVariables<TVarName extends string>(
  names: TVarName[],
  processEnv: Record< string, string | undefined >,
): EnvVariables<TVarName> {
  const envVarValues = names.map( e => processEnv[ e ] );
  const definitelyPresentEnvVars = envVarValues.map( ( e, i ) => {
    if ( e === undefined ) {
      throw new Error( `Please provide environment variable "${ names[ i ] }".` );
    }

    return e;
  } );

  return names.reduce(
    ( acc, cur, i ) => ( {
      ...acc,
      [ cur ]: definitelyPresentEnvVars[ i ],
    } ),
    {} as EnvVariables<TVarName>,
  );
}
