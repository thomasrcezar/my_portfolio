import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({}); // State for validation errors
  const [statusMessage, setStatusMessage] = useState<string | null>(null); // For success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = t('contact.validation_required');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation_required');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.validation_email');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.validation_required');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Clear error for the field being changed
    if (errors[name as keyof typeof errors]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null); // Clear previous messages

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setIsSubmitting(true);

    // --- Placeholder for form submission logic ---
    // Replace this with your actual form submission (e.g., API call)
    console.log('Form data submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    // --- End Placeholder ---

    // Simulate success for now
    setStatusMessage(t('contact.success_message'));
    setFormData({ name: '', email: '', message: '' }); // Clear form
    setIsSubmitting(false);

    // TODO: Implement actual submission logic and error handling
    // Example error handling:
    // try {
    //   const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    //   if (!response.ok) throw new Error('Network response was not ok');
    //   setStatusMessage(t('contact.success_message'));
    //   setFormData({ name: '', email: '', message: '' });
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   setStatusMessage(t('contact.error_message'));
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          {t('contact.name_label')}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
          placeholder={t('contact.name_label')} // Use label as placeholder too
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          {t('contact.email_label')}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
          placeholder={t('contact.email_label')}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          {t('contact.message_label')}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
          placeholder={t('contact.message_label')}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        ></textarea>
        {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}
            transition duration-150 ease-in-out`}
        >
          {isSubmitting ? 'Sending...' : t('contact.send_button')}
        </button>
      </div>
      {statusMessage && (
        <p className={`text-sm text-center ${statusMessage.includes('wrong') ? 'text-red-400' : 'text-green-400'}`}>
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
