import React from 'react';
import PropTypes from 'prop-types';

import { ErrorAlert } from './styles';

const ErrorApi = ({ data }) => {
  const { status, code } = data;

  const getErrorMsg = error => {
    switch (error) {
      case '429':
        return 'A API atingiu o limite de acessos. Tente novamente dentro de alguns minutos.';
      default:
        return 'Não foi possível obter os dados da API. Recarregue a página para tentar novamente.';
    }
  };

  return <ErrorAlert isVisible={status}>{getErrorMsg(code)}</ErrorAlert>;
};

ErrorApi.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.bool,
    code: PropTypes.string,
  }).isRequired,
};

export default ErrorApi;
