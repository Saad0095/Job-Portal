import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ConfirmedApplication = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-6xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('confirmedApplication.title')}</h1>
        <p className="text-gray-600 mb-8">{t('confirmedApplication.description')}</p>
        <button
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition duration-200"
          onClick={() => navigate('/')}
        >
          {t('confirmedApplication.button')}
        </button>
      </div>
    </div>
  );
};

export default ConfirmedApplication;
