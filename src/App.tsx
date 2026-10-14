/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import { ArdTopografiaPage } from './components/ArdTopografiaPage';
import { ExportToolbar } from './components/ExportToolbar';
import { ContactModal, ModalType } from './components/ContactModal';
import { ScrollFrameAnimation } from './components/ScrollFrameAnimation';

export default function App() {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-primary text-white flex flex-col selection:bg-accent selection:text-primary">
      <ScrollFrameAnimation />

      {/* Barra fixa de identificacao no topo */}
      <ExportToolbar />

      {/* Main Page Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start p-0 sm:p-4 md:p-8 overflow-x-hidden">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1240px] border border-white/[0.12] rounded-none sm:rounded-[12px] overflow-hidden shadow-2xl">
            <ArdTopografiaPage
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
