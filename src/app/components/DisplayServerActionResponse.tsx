type Props = {
    result: {
      data?: {
        message?: string
      }
      serverError?: string
      fetchError?: string
      validationErrors?: Record<string, string[] | undefined> | undefined
    }
  }
  
  export function DisplayServerActionResponse({ result }: Props) {
    const { data, serverError, fetchError, validationErrors } = result
  
    return (
      <div className="mx-auto mt-3 max-w-xl sm:mt-4">
        {/* Success Message */}
        {data?.message ? <h2 className="my-2 text-xl text-gray-600 font-semibold">{data.message}</h2> : null}
  
        {serverError ? (
          <div className="my-2 text-red-500">
            <p>
              Erreur serveur, veuillez réessayer plus tard.{' '}
              <span className="italic">({serverError})</span>
            </p>
          </div>
        ) : null}
  
        {fetchError ? (
          <div className="my-2 text-red-500">
            <p>
              Erreur de récupération, veuillez vérifier votre connexion.{' '}
              <span className="italic">({fetchError})</span>
            </p>
          </div>
        ) : null}
  
        {validationErrors ? (
          <div className="my-2 text-red-500">
            {Object.keys(validationErrors).map((key) => (
              <p key={key}>{`${key}: ${
                validationErrors &&
                validationErrors[key as keyof typeof validationErrors]
              }`}</p>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
  