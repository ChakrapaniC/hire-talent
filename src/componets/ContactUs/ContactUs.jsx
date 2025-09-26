"use client";

import React, { useState, useEffect } from 'react';
import { Country } from 'country-state-city';
import axios from 'axios';
import { isValidPhoneNumber } from 'react-phone-number-input';

const ContactUs = ({ formData, updateFormData }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [countryCodeIso, setCountryCodeIso] = useState('IN');
  const [userTimezone, setUserTimezone] = useState('');
  const [countryCode, setCountryCode] = useState('91');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber, countryCode) => {
    if (!phoneNumber) {
      setPhoneError('Phone number is required');
      return false;
    }

    try {
      const currentCountry = allCountries.find(country => `+${country.phonecode}` === countryCode);
      const countryIso = currentCountry?.isoCode || countryCodeIso;
      
      let fullPhoneNumber = phoneNumber;
      if (!phoneNumber.startsWith('+')) {
        fullPhoneNumber = `${countryCode}${phoneNumber}`;
      }
      
      if (!isValidPhoneNumber(fullPhoneNumber, countryIso)) {
        setPhoneError('Please enter a valid phone number');
        return false;
      }
      
      setPhoneError('');
      return true;
    } catch (error) {
      setPhoneError('Please enter a valid phone number');
      return false;
    }
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    updateFormData('phoneNumber', phoneNumber);
    
    if (phoneNumber) {
      validatePhoneNumber(phoneNumber, formData.countryCode || `+${countryCode}`);
    } else {
      setPhoneError('Phone number is required');
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    updateFormData('email', email);
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const detectUserCountry = async () => {
    try {
      const {data} = await axios.get(
        'https://dev.resources.prolegion.com/admin/v1/profiles/getIp/get-country',
        {
          headers: {
            'x-api-key': 'c885c354021654523f3aa0ba60ab7906bdec8d539261e7b5518d4a43bbd74cd4'
          }
        }
      );
      const detectedCountry = data;
      let countryCode = null;

      if (detectedCountry && detectedCountry.code) {
        countryCode = detectedCountry.code;

        if (detectedCountry.timezone && detectedCountry.timezone.id) {
          setUserTimezone(detectedCountry.timezone.id);
        }
      } else if (typeof detectedCountry === 'string') {
        countryCode = detectedCountry;
      }

      if (countryCode) {
        const selectedCountry = allCountries.find(country => country.isoCode === countryCode);
        if (selectedCountry) {
          setCountryCodeIso(countryCode);
          setCountryCode(selectedCountry.phonecode);
        }
      } else {
        console.warn("Could not detect country, using default IN");
      }
    } catch (error) {
      console.error("Error in detectUserCountry:", error);
      setCountryCodeIso('IN');
      setUserTimezone('Asia/Calcutta');
    }
  };

  useEffect(() => {
    const countries = Country.getAllCountries();
    setAllCountries(countries);

    const indiaCountry = countries.find(country => country.isoCode === 'IN');
    if (indiaCountry) {
      setCountryCodeIso('IN');
      setUserTimezone('Asia/Calcutta');
    }

    detectUserCountry();
  }, []);

  return (
    <div className="space-y-6 mt-7">
      <div className="grid md:grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={handleEmailChange}
            placeholder="my.name@company.com"
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              emailError ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName || ''}
            onChange={(e) => updateFormData('companyName', e.target.value)}
            placeholder="Company name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Contact name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.contactName || ''}
            onChange={(e) => updateFormData('contactName', e.target.value)}
            placeholder="Contact name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phoneNumber || ''}
            onChange={handlePhoneChange}
            placeholder="Phone number"
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              phoneError ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {phoneError && (
            <p className="mt-1 text-sm text-red-600">{phoneError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
