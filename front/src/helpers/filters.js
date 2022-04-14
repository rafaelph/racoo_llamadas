export const filterCalls = (call, status, kind, system, user, company) => {
  // ! solo parametro
  if (status !== "" && kind === "" && system === "" && user === "" && company === "") {
    return call.status === status;
  }

  if (status === "" && kind !== "" && system === "" && user === "" && company === "") {
    return call.kind === kind;
  }

  if (status === "" && kind === "" && system !== "" && user === "" && company === "") {
    return call.system === system;
  }

  if (status === "" && kind === "" && system === "" && user !== "" && company === "") {
    return call.user._id === user;
  }

  if (status === "" && kind === "" && system === "" && user === "" && company !== "") {
    return call.client.company._id === company;
  }

  //2 parametros
  if (status !== "" && kind !== "" && system === "" && user === "" && company === "") {
    return call.status === status && call.kind === kind;
  }

  if (status !== "" && kind === "" && system !== "" && user === "" && company === "") {
    return call.status === status && call.system === system;
  }

  if (status !== "" && kind === "" && system === "" && user !== "" && company === "") {
    return call.status === status && call.user._id === user;
  }

  if (status !== "" && kind === "" && system === "" && user === "" && company !== "") {
    return call.status === status && call.client.company._id === company;
  }

  if (status === "" && kind !== "" && system !== "" && user === "" && company === "") {
    return call.kind === kind && call.system === system;
  }

  if (status === "" && kind !== "" && system === "" && user !== "" && company === "") {
    return call.kind === kind && call.user._id === user;
  }

  if (status === "" && kind !== "" && system === "" && user === "" && company !== "") {
    return call.kind === kind && call.client.company._id === company;
  }

  if (status === "" && kind === "" && system !== "" && user !== "" && company === "") {
    return call.system === system && call.user._id === user;
  }

  if (status === "" && kind === "" && system !== "" && user === "" && company !== "") {
    return call.system === system && call.client.company._id === company;
  }

  if (status === "" && kind === "" && system === "" && user !== "" && company !== "") {
    return call.client.company._id === company && call.user._id === user;
  }


  //3  parametros
  if (status !== "" && kind !== "" && system !== "" && user === "" && company === "") {
    return (
      call.status === status && call.kind === kind && call.system === system
    );
  }

  if (status !== "" && kind !== "" && system === "" && user !== "" && company === "") {
    return (
        call.status === status && call.kind === kind && call.user._id === user
    );
  }

  if (status !== "" && kind !== "" && system === "" && user === "" && company !== "") {
    return (
        call.status === status && call.kind === kind && call.client.company._id === company
    );
  }

  if (status !== "" && kind === "" && system !== "" && user !== "" && company === "") {
    return (
        call.status === status && call.system === system && call.user._id === user
    );
  }

  if (status !== "" && kind === "" && system !== "" && user === "" && company !== "") {
    return (
        call.status === status && call.system === system && call.client.company._id === company
    );
  }

  if (status !== "" && kind === "" && system === "" && user !== "" && company !== "") {
    return (
        call.status === status && call.user._id === user && call.client.company._id === company
    );
  }

  if (status === "" && kind !== "" && system !== "" && user !== "" && company === "") {
    return (
      call.kind === kind && call.system === system && call.user._id === user
    );
  }

  if (status === "" && kind !== "" && system !== "" && user === "" && company !== "") {
    return (
        call.kind === kind && call.system === system && call.client.company._id === company
    );
  }

  if (status === "" && kind !== "" && system === "" && user !== "" && company !== "") {
    return (
        call.kind === kind && call.user._id === user && call.client.company._id === company
    );
  }

  if (status === "" && kind === "" && system !== "" && user !== "" && company !== "") {
    return (
        call.system === system && call.user._id === user && call.client.company._id === company
    );
  }


  //todos los parametros
  if (status !== "" && kind !== "" && system !== "" && company !== "") {
    return (
      call.status === status && call.kind === kind && call.system === system && call.client.company._id === company
    );
  }
};
