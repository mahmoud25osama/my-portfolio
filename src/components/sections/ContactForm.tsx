const ContactForm: React.FC<{
    formData: { name: string; email: string; message: string }
    setFormData: React.Dispatch<
        React.SetStateAction<{ name: string; email: string; message: string }>
    >
    submitForm: (e: React.FormEvent) => void
    isLoading: boolean
    error: string
    setError: React.Dispatch<React.SetStateAction<string>>
}> = ({ formData, setFormData, submitForm, isLoading, error, setError }) => {
    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
        if (error) setError('')
    }

    return (
        <div className="  border-r border-slate-600 flex flex-col items-center justify-center px-10">
            <form
                className="lg:w-[340px] flex flex-col gap-6"
                onSubmit={submitForm}
            >
                <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-base">_name:</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                            handleInputChange('name', e.target.value)
                        }
                        className="w-full h-12 px-3 bg-slate-950 border border-slate-300 rounded-lg text-slate-400 text-base focus:outline-none focus:border-slate-400"
                        placeholder=""
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-base">_email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            handleInputChange('email', e.target.value)
                        }
                        className="w-full h-12 px-3 bg-slate-950 border border-slate-600 rounded-lg text-slate-400 text-base focus:outline-none focus:border-slate-400"
                        placeholder=""
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-base">
                        _message:
                    </label>
                    <textarea
                        value={formData.message}
                        onChange={(e) =>
                            handleInputChange('message', e.target.value)
                        }
                        className="w-full h-[120px] px-3 py-3 bg-slate-950 border border-slate-600 rounded-lg text-slate-400 text-base resize-none focus:outline-none focus:border-slate-400"
                        placeholder=""
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="w-[142px] text-sm px-3 py-2 h-10 bg-orange-400 text-teal-950 rounded-[8px] cursor-pointer hover:bg-orange-500 transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'submit-message'}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
