import Actions from "actions/register/modules/candidate";
import type { NextPage } from "next";
import React from "react";
import { Input } from "types/register/candidate";
import { Result } from "types/features/register";

const CandidatePage: NextPage = () => {
  const router = Actions.useRouter();
  const interest: any = router.query.fieldType;

  const [error, setError] = Actions.useState<boolean>(false);

  const { setAccess_Token } = Actions.useContext(Actions.ApplicationContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = Actions.useForm<Input>({
    resolver: Actions.yupResolver(Actions.RegisterSchema),
  });

  const $register = Actions.useMutation(
    ({
      loginData,
      setError,
    }: {
      loginData: Input;
      setError: React.Dispatch<React.SetStateAction<boolean>>;
    }) => Actions.RegisterRequest({ loginData: loginData, setError })
  );

  Actions.useEffect(() => {
    setValue("interest", interest);
    setValue("role", "member");
  });
  return (
    <>
      <Actions.Head>
        <title>Register | Tech Talent</title>
      </Actions.Head>
      <Actions.Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div>
          <div className="content-0-2-101">
            <div className="marginOnMobile-0-2-111">
              <div className="root-0-2-113">
                <Actions.RegisterHeader />
                <Actions.RegisterForm
                  register={register}
                  errors={errors}
                  errorMessage={error}
                />
                <Actions.RegisterCandidatePagesFooter />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Actions.RegisterFooter
        candidate={true}
        candidateOnClick={handleSubmit((data: Input) => {
          $register.mutate(
            { loginData: data, setError },
            {
              onSuccess: (data: Result) => {
                document.cookie = `cookie=${data.access_token}`;
                setAccess_Token({ access_token: data.access_token });
                router.push(`/register/candidate/info?fieldType=${interest}`);
              },
            }
          );
        })}
      />
    </>
  );
};

export default CandidatePage;
