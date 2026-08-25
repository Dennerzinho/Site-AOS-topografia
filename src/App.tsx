/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import { AosTopografiaPage } from './components/AosTopografiaPage';
import { ExportToolbar } from './components/ExportToolbar';
import { ContactModal, ModalType } from './components/ContactModal';
import { ScrollFrameAnimation } from './components/ScrollFrameAnimation';

export default function App() {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-white selection:text-black">
      <ScrollFrameAnimation />

      {/* Top Controls Toolbar for High-Res Export and View */}
      <ExportToolbar
        bannerRef={bannerRef}
        zoom={zoom}
        setZoom={setZoom}
        onOpenModal={(type) => setModalType(type)}
      />

      {/* Main Page Area */}
      <main className="flex-1 flex flex-col items-center justify-start p-0 sm:p-4 md:p-8 overflow-x-hidden">
        <div
          className="transition-transform duration-200 ease-out origin-top w-full flex justify-center"
          style={{
            transform: zoom !== 1 ? `scale(${zoom})` : undefined,
          }}
        >
          <div className="w-full max-w-[1240px] border border-white/[0.12] rounded-none sm:rounded-[12px] overflow-hidden shadow-2xl bg-[#0A0A0A]">
            <AosTopografiaPage
              bannerRef={bannerRef}
              onOpenModal={(type) => setModalType(type)}
            />
          </div>
        </div>
      </main>

      {/* Interactive Contact / Appointment Modal */}
      <ContactModal
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </div>
  );
}
