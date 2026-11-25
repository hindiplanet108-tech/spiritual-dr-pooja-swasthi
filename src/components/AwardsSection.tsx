import React, { useState, useEffect } from 'react';
import { AWARDS_DATA, AwardItem } from '../data/awardsData';
import {
  Award,
  Trophy,
  ExternalLink,
  X,
  Camera,
  CheckCircle2,
  MapPin,
  Users
} from 'lucide-react';
import { getStoredMedia, saveStoredMedia } from '../utils/photoStorage';
import { getTranslation } from '../data/translations';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';

interface AwardsSectionProps {
  lang: string;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ lang }) => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [bulkUploadMsg, setBulkUploadMsg] = useState<string | null>(null);
  const t = getTranslation(lang);

  useEffect(() => {
    AWARDS_DATA.forEach((award) => {
      getStoredMedia(`award_${award.id}`).then((stored) => {
        if (stored) {
          setCustomPhotos((prev) => ({ ...prev, [award.id]: stored }));
        }
      });
    });
  }, []);

  const handleUploadSingleAwardPhoto = (awardId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        await saveStoredMedia(`award_${awardId}`, dataUrl);
        setCustomPhotos((prev) => ({ ...prev, [awardId]: dataUrl }));
        setBulkUploadMsg(lang === 'hi' ? 'चित्र सफलतापूर्वक अपडेट हो गया!' : 'Photo updated successfully!');
        setTimeout(() => setBulkUploadMsg(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="honors" className="py-12 md:py-16 bg-white text-[#1E162B] relative overflow-hidden border-t border-[#E5DFD5]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F4F0FA] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-6 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7A5311]">
            <Trophy size={14} className="text-[#B48228]" />
            <span className="text-[#522B8A]">{t.awardsNav}</span>
            <span aria-hidden="true" className="text-[#B48228]">·</span>
            <span className="tabular-nums font-bold">
              {lang === 'hi' ? `${AWARDS_DATA.length} राष्ट्रीय सम्मान व फोटो गैलरी` : `${AWARDS_DATA.length} Verified Felicitations & Photo Archive`}
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
            {t.awardsTitle} — <br />
            <span className="italic font-semibold text-[#522B8A]">
              {lang === 'hi' ? 'विश्वास, अनुभव और राष्ट्रीय सम्मान की पहचान' : t.awardsSubtitle}
            </span>
          </h2>

          <p className="text-sm text-[#4A4356] leading-relaxed">
            {lang === 'hi'
              ? 'उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह, आईआईएमटी विश्वविद्यालय मेरठ में पूज्य जैनाचार्य 108 सौरभ सागर जी महाराज, काशी हिन्दू विश्वविद्यालय (BHU) के ज्योतिष विभागाध्यक्ष आचार्य चंद्रमौली उपाध्याय जी, और महाकाल उज्जैन के प्रधान पुरोहित दिनेश जी द्वारा सम्मानित।'
              : 'Conferred with highest state and academic honors by distinguished dignitaries including Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh, Jainacharya 108 Saurabh Sagar Ji Maharaj at IIMT University, BHU Jyotish Head Acharya Chandramouli Upadhyay, and revered spiritual authorities across national conclaves.'}
          </p>
        </div>

        {bulkUploadMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3 shadow-xs">
            <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{bulkUploadMsg}</span>
          </div>
        )}

        {/* AWARDS MUSEUM GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS_DATA.map((award, index) => {
            const currentImg = customPhotos[award.id] || award.imageUrl;

            return (
              <div
                key={award.id}
                className="group rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] hover:border-[#DEC38C] p-4 flex flex-col justify-between transition-all duration-300 hover:bg-white shadow-xs hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Gallery Matted Photo Frame */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E6DFD3] flex items-center justify-center text-center shadow-2xs">
                    {currentImg ? (
                      <div
                        className="relative w-full h-full overflow-hidden group/thumb cursor-pointer"
                        onClick={() => setSelectedAward(award)}
                      >
                        <img
                          src={currentImg}
                          alt={award.alt}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      <div
                        className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FAF8F5] to-[#F4F0FA] cursor-pointer"
                        onClick={() => setSelectedAward(award)}
                      >
                        <div className="w-12 h-12 rounded-full border border-[#DEC38C] bg-[#FBF5E6] flex items-center justify-center text-[#B48228] mb-2 shadow-xs">
                          <Trophy size={22} />
                        </div>
                        <h4 className="font-cinzel text-xs font-bold text-[#1E162B] line-clamp-1">
                          {award.eventGroup_hi}
                        </h4>
                        <p className="text-[10px] text-[#5D556A] mt-1 line-clamp-2 px-2">
                          {award.event_hi}
                        </p>
                      </div>
                    )}

                    {/* Bottom strip */}
                    <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-1.5 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/95 border border-[#E6DFD3] text-[10px] text-[#1E162B] font-bold shadow-xs">
                        <Award size={11} className="text-[#B48228]" />
                        <span>{lang === 'hi' ? `सम्मान #${index + 1}` : `Honor #${index + 1}`}</span>
                      </span>
                      <span className="text-[9px] text-white/90 font-mono truncate max-w-[125px] bg-slate-900/75 px-1.5 py-0.5 rounded">
                        {award.filename}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#522B8A] border border-[#E6DFD3] uppercase tracking-wider shadow-xs">
                      {lang === 'hi'
                        ? (award.category === 'conclave' ? 'महासम्मेलन' : award.category === 'felicitation' ? 'मंच सम्मान' : award.category === 'memento' ? 'स्मृति चिन्ह' : 'समाचार')
                        : (award.category === 'conclave' ? 'Conclave' : award.category === 'felicitation' ? 'Felicitation' : award.category === 'memento' ? 'Memento' : 'Press')}
                    </div>

                    {/* Upload affordance */}
                    <label
                      title={lang === 'hi' ? "इस सम्मान का चित्र बदलें / अपलोड करें" : "Upload photo for this award"}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/95 text-[#1E162B] hover:bg-[#522B8A] hover:text-white border border-[#E6DFD3] cursor-pointer transition-all shadow-md z-10"
                    >
                      <Camera size={13} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUploadSingleAwardPhoto(award.id, file);
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-[#7A5311] tracking-wide uppercase">
                      {award.eventGroup_hi}
                    </div>

                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#1E162B] leading-snug group-hover:text-[#522B8A] transition-colors">
                      {lang === 'hi' ? award.event_hi : award.event}
                    </h3>

                    {award.caption && (
                      <p className="text-xs text-[#4A4356] leading-relaxed line-clamp-3">
                        {award.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3.5 mt-4 border-t border-[#E6DFD3] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[11px] text-[#5D556A] truncate max-w-[155px]">
                    <MapPin size={11} className="text-[#B48228] shrink-0" />
                    <span className="truncate">{award.venue || 'भारत'}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className="font-bold text-[#522B8A] hover:text-[#B48228] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'hi' ? 'विवरण देखें' : 'View Citation'}</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* CLEAN LIGHTBOX CITATION MODAL */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white text-[#1E162B] rounded-2xl border border-[#E6DFD3] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 border-b border-[#E6DFD3] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                  {selectedAward.eventGroup_hi} · {lang === 'hi' ? 'प्रमाणित राष्ट्रीय सम्मान' : 'VERIFIED RECORD'}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                  {lang === 'hi' ? selectedAward.event_hi : selectedAward.event}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="p-2 rounded-full bg-[#FAF8F5] hover:bg-[#F4F0FA] text-[#1E162B] border border-[#E6DFD3] cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#E6DFD3] aspect-video relative flex items-center justify-center p-2">
              <img
                src={customPhotos[selectedAward.id] || selectedAward.imageUrl || poojaAuthenticPhoto}
                alt={selectedAward.alt}
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                }}
              />
              <div className="absolute bottom-3 right-3">
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-[#522B8A] border border-[#E6DFD3] text-xs font-bold shadow-md transition-all">
                  <Camera size={13} />
                  <span>{lang === 'hi' ? 'फोटो बदलें' : 'Update Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadSingleAwardPhoto(selectedAward.id, file);
                    }}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#4A4356] leading-relaxed bg-[#FAF8F5] p-4 rounded-xl border border-[#E6DFD3]">
              <div>
                <span className="font-bold text-[#522B8A] uppercase text-xs block mb-1">
                  {lang === 'hi' ? 'सम्मान की जानकारी:' : 'Citation Statement:'}
                </span>
                <p className="text-[#1E162B]">{selectedAward.caption || selectedAward.event}</p>
              </div>

              {selectedAward.dignitaries && (
                <div className="pt-2 border-t border-[#E6DFD3] flex items-start gap-2">
                  <Users size={14} className="text-[#B48228] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1E162B]">{lang === 'hi' ? 'विशिष्ट अतिथि: ' : 'Dignitaries: '}</span>
                    <span>{selectedAward.dignitaries}</span>
                  </div>
                </div>
              )}

              {selectedAward.venue && (
                <div className="pt-1 flex items-start gap-2">
                  <MapPin size={14} className="text-[#B48228] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1E162B]">{lang === 'hi' ? 'स्थान व तारीख: ' : 'Venue & Date: '}</span>
                    <span>{selectedAward.venue}</span>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-[#5D556A] pt-2 border-t border-[#E6DFD3] font-mono">
                {lang === 'hi' ? 'फोटो संदर्भ:' : 'Asset Reference:'} {selectedAward.filename}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="px-6 py-2.5 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
