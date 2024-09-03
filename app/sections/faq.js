import Link from "next/link"
import { FAQPageJsonLd } from 'next-seo';

export default function Faq() {
    return (
        <section className="wrapper !bg-[#ffffff]">
            <FAQPageJsonLd
                useAppDir={true}
                mainEntity={[
                    {
                        questionName: 'Apa ketentuan konsumen?',
                        acceptedAnswerText: `
                            Konsumen perorangan yang berprofesi sebagai Karyawan (Swasta/PNS), 
                            Wiraswasta maupun Profesional, baik yang merupakan nasabah 
                            Adira Finance (kontrak aktif atau lunas) maupun yang belum menjadi nasabah.
                        `,
                    },
                    {
                        questionName: 'Apa persyaratan calon konsumen?',
                        acceptedAnswerText: `
                            <ol>
                                <li>Konsumen perorangan Karyawan (PNS/Swasta)
                                    <ul>
                                        <li>Warga Negara Indonesia (WNI)</li>
                                        <li>Lama kerja min. 1 tahun</li>
                                        <li>Usia min. 21 tahun / sudah menikah / pernah menikah</li>
                                        <li>Usia maks. pada saat kredit lunas adalah 55 tahun</li>
                                        <li>Tempat tinggal bukan Kost.</li>
                                        <li>Khusus Rumah Kontrak : berakhirnya masa kontrak &gt; akhir tenor kredit atau sudah tinggal di rumah
                                            tersebut minimal 2 tahun.</li>
                                    </ul>
                                </li>
                                <li>Konsumen perorangan Wiraswasta &amp; Profesional
                                    <ul>
                                        <li>Warga Negara Indonesia (WNI)</li>
                                        <li>Lama usaha min. 2 tahun</li>
                                        <li>Usia min. 21 tahun / sudah menikah / pernah menikah</li>
                                        <li>Usia maks. pada saat kredit lunas adalah 60 tahun</li>
                                        <li>Tempat tinggal bukan Kost.</li>
                                        <li>
                                            Khusus Rumah Kontrak : berakhirnya masa kontrak &gt; akhir 
                                            tenor kredit atau sudah tinggal di rumah
                                            tersebut minimal 2 tahun.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        `,
                    },
                    {
                        questionName: 'Apa saja ketentuan pengajuan gadai BPKB?',
                        acceptedAnswerText: `
                            <ol>
                                <li>Anda yang mengajukan harus berprofesi sebagai Karyawan (Swasta/PNS), Wiraswasta maupun Profesional.</li>
                                <li>Berlaku untuk Total Pokok Hutang (PH) dibawah Rp. 500 juta.</li>
                                <li>Penggunaan dana wajib untuk kebutuhan konsumtif.</li>
                                <li>Jaminan yang digunakan bisa BPKB motor atau BPKB mobil.</li>
                                <li>Usia kendaraan yang dapat dibiayai adalah sbb*:
                                    <ul>
                                        <li>Untuk Motor
                                            <ul>
                                                <li>Maksimal usia kendaraan 9 tahun sejak tahun produksi hingga akhir masa kredit&nbsp;</li>
                                            </ul>
                                        </li>
                                        <li>Untuk Mobil Penumpang
                                            <ul>
                                                <li>Maksimal usia kendaraan 12 tahun sejak tahun produksi hingga akhir masa kredit&nbsp;</li>
                                            </ul>
                                        </li>
                                        <li>Untuk Mobil Niaga (Pick up)
                                            <ul>
                                                <li>Maksimal usia kendaraan 10 tahun sejak tahun produksi hingga akhir masa kredit</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Tenor yang dapat diambil untuk Jaminan Motor atau Mobil adalah maksimal 4 tahun / 48 bulan*.&nbsp;</li>
                                <li>Dalam hal Anda mengambil Produk Fasilitas Dana maka Anda wajib menyerahkan bukti pembayaran / transfer atas
                                    pembelian barang atau jasa kepada ADIRA FINANCE paling lambat 3 bulan sejak tanggal Perjanjian Pembiayaan.</li>
                                <li>Setiap fasilitas pembiayaan yang diambil oleh Anda akan dilengkapi dengan Asuransi terhadap Barang atau Jasa
                                    yang dibiayai ADIRA FINANCE, serta Asuransi lainnya termasuk Asuransi terhadap Diri Anda (seperti Asuransi
                                    Kecelakaan Diri dan/atau Asuransi Jiwa) dan/atau Asuransi terhadap Fasilitas Pembiayaan sebagaimana ditawarkan
                                    oleh ADIRA FINANCE kepada Anda pada saat pengajuan.</li>
                            </ol>
                        `,
                    },
                    {
                        questionName: 'Apa manfaat yang dapat diperoleh dari gadai BPKB?',
                        acceptedAnswerText: `
                            <ol>
                                <li>Persyaratan kredit yang <strong>mudah </strong>dan proses pencairan <strong>cepat.</strong></li>
                                <li><strong>Perlindungan asuransi</strong> untuk kendaraan &amp; Konsumen</li>
                                <li><strong>BPKB aman terjamin.</strong></li>
                                <li>Dukungan <strong>jaringan ratusan kantor cabang Adira Finance </strong>di seluruh wilayah Indonesia</li>
                                <li>Terbuka bagi konsumen dengan profesi Karyawan (Swasta/PNS), Wiraswasta, Profesional maupun kelembagaan</li>
                                <li>Kemudahan pembayaran angsuran melalui: Kantor Cabang, Keday Adira, Aplikasi Adiraku, jaringan Bank Danamon,
                                    Indomaret/Alfamart, Kantor Pos, transfer ke Virtual Account Bank Danamon, Virtual Account BCA, aplikasi
                                    LinkAja.&nbsp;</li>
                            </ol>
                        `,
                    },
                    {
                        questionName: 'Apa saja risiko yang mungkin harus ditanggung?',
                        acceptedAnswerText: `
                            <ul>
                                <li>Risiko pengajuan tidak disetujui sewaktu – waktu apabila Konsumen tidak memenuhi syarat-syarat yang ditentukan
                                    oleh ADIRA FINANCE baik itu persyaratan dokumen maupun hal lain yang merupakan wewenang dari ADIRA FINANCE.</li>
                                <li>Apabila Konsumen lalai dalam pembayaran angsuran ataupun tidak memenuhi kewajiban yang disepakati dalam
                                    Perjanjian Pembiayaan, maka terdapat Risiko sebagai berikut :
                                    <ol>
                                        <li>Risiko tambahan biaya yang muncul apabila terjadi keterlambatan dalam pembayaran angsuran (biaya
                                            eksekusi agunan dan denda), sbb*:
                                            <ul>
                                                <li>Denda keterlambatan per hari untuk agunan mobil (roda empat/lebih) sebesar 0,2% (nol koma dua
                                                    persen) x besar angsuran</li>
                                                <li>Biaya Penagihan maksimal 15% (lima belas persen) dihitung dari angsuran yang tertunggak.</li>
                                            </ul>
                                        </li>
                                        <li>Risiko tambahan biaya yang muncul apabila terjadi pelunasan dipercepat, sbb*:
                                            <ul>
                                                <li>Agunan Mobil (roda empat/lebih) sebesar 8% (tujuh persen) dari jumlah yang harus dilunasi</li>
                                            </ul>
                                        </li>
                                        <li>Risiko eksekusi agunan yang terjadi dengan kondisi sebagai berikut*;
                                            <ul>
                                                <li>Konsumen lalai dalam melakukan pembayaran angsuran sesuai perjanjian</li>
                                                <li>Konsumen melakukan pengalihan atau penggadaian obyek pembiayaan tanpa sepengetahuan Perusahaan
                                                    Pembiayaan.</li>
                                                <li>Adapun Biaya Eksekusi Agunan yang akan dikenakan adalah <strong>maksimal 15% (lima belas persen)
                                                    </strong>dari <strong>Total Keseluruhan Kewajiban Konsumen </strong></li>
                                            </ul>
                                        </li>
                                        <li>Segala pembayaran yang dilakukan oleh Konsumen kepada ADIRA FINANCE akan menjadi hak ADIRA FINANCE
                                            sepenuhnya dan tidak dapat diambil kembali oleh Konsumen.</li>
                                        <li>Risiko reputasi berupa tercatatnya Riwayat Pembiayaan pada Sistem Layanan Informasi Keuangan (SLIK)
                                            ketika Konsumen menunggak pembayaran.</li>
                                    </ol>
                                </li>
                            </ul>
                        `,
                    },
                    {
                        questionName: 'Apa hak yang dapat diperoleh?',
                        acceptedAnswerText: `
                            <ul>
                                <li>Konsumen akan memperoleh fasilitas Pembiayaan yang diberikan oleh ADIRA FINANCE dan dapat menggunakan Objek
                                    Pembiayaan setelah Konsumen melengkapi dokumen administrasi yang ditetapkan ADIRA FINANCE, menandatangani
                                    Perjanjian, Biaya Administrasi, Biaya Asuransi, Biaya Provisi dan biaya-biaya lainnya ataupun denda (apabila
                                    ada).</li>
                                <li>Konsumen berhak mengakhiri Perjanjian sebelum Jangka Waktu Pembiayaan berakhir dengan membayar seluruh kewajiban
                                    yang belum dilunasi secara penuh, dengan ketentuan bahwa Konsumen wajib menyampaikan maksudnya terlebih dahulu
                                    kepada ADIRA FINANCE minimal 30 hari sebelum pelunasan.</li>
                                <li>Konsumen akan menerima Bukti Kepemilikan Kendaraan Bermotor (BPKB) setelah seluruh kewajibannya dilunasi</li>
                            </ul>
                        `,
                    },
                    {
                        questionName: 'Apa saja kewajiban yang harus dipenuhi?',
                        acceptedAnswerText: `
                            <ul>
                                <li>Konsumen wajib membayar Biaya Administrasi, Biaya Asuransi, Provisi, dan biaya-biaya lainnya ataupun denda
                                    (apabila ada) sesuai dengan yang diinformasikan oleh Petugas ADIRA FINANCE di Cabang pada saat awal pengajuan.
                                </li>
                                <li>Konsumen dengan biayanya sendiri wajib memelihara dan menjaga Objek Pembiayaan agar tetap dalam kondisi baik dan
                                    tidak mempergunakan Objek Pembiayaan untuk tujuan yang bertentangan dengan hukum. Kerusakan, hilang ataupun
                                    musnahnya Objek Pembiayaan menjadi tanggung jawab Konsumen.</li>
                            </ul>
                        `,
                    },
                    {
                        questionName: 'Apa saja yang bisa dibiayai oleh Gadai BPKB?',
                        acceptedAnswerText: `
                            <p>Yang dapat dibiayai Kredit Multiguna Jasa, yaitu :</p>
                            <ul>
                                <li>Biaya Travel/Wisata</li>
                                <li>Biaya Pendidikan/kursus/training</li>
                                <li>Biaya kesehatan</li>
                                <li>Biaya Renovasi Rumah</li>
                                <li>Biaya Kenduri (Perayaan, sunatan, kelahiran, dll)</li>
                            </ul>
                        `,
                    },
                ]}
            />

            {/* <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20"> */}
            <div className="container pt-10 xl:pt-14 lg:pt-14 md:pt-14 pb-8 xl:pb-10 lg:pb-10 md:pb-10">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                    FAQ
                </h2>
                <p className="lead text-[0.9rem] font-medium leading-[1.65] !text-center !mb-10 md:!px-24 xl:!px-0 lg:!px-0">
                    Pertanyaan yang sering diajukan
                </p>
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mb-0">
                        <div id="accordion-1" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-1">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-1" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-1">
                                        Apa ketentuan konsumen?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-1" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-1" 
                                    data-bs-target="#accordion-1">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>
                                            Konsumen perorangan yang berprofesi sebagai Karyawan (Swasta/PNS), 
                                            Wiraswasta maupun Profesional, baik yang merupakan nasabah 
                                            Adira Finance (kontrak aktif atau lunas) maupun yang belum menjadi nasabah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion-2" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-2">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-2" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-2">
                                        Apa persyaratan calon konsumen?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-2" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-2" 
                                    data-bs-target="#accordion-2">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <ol className="list-decimal">
                                            <li>Konsumen perorangan Karyawan (PNS/Swasta)
                                                <ul className="list-disc">
                                                    <li>Warga Negara Indonesia (WNI)</li>
                                                    <li>Lama kerja min. 1 tahun</li>
                                                    <li>Usia min. 21 tahun / sudah menikah / pernah menikah</li>
                                                    <li>Usia maks. pada saat kredit lunas adalah 55 tahun</li>
                                                    <li>Tempat tinggal bukan Kost.</li>
                                                    <li>Khusus Rumah Kontrak : berakhirnya masa kontrak &gt; akhir tenor kredit atau sudah tinggal di rumah
                                                        tersebut minimal 2 tahun.</li>
                                                </ul>
                                            </li>
                                            <li>Konsumen perorangan Wiraswasta &amp; Profesional
                                                <ul className="list-disc">
                                                    <li>Warga Negara Indonesia (WNI)</li>
                                                    <li>Lama usaha min. 2 tahun</li>
                                                    <li>Usia min. 21 tahun / sudah menikah / pernah menikah</li>
                                                    <li>Usia maks. pada saat kredit lunas adalah 60 tahun</li>
                                                    <li>Tempat tinggal bukan Kost.</li>
                                                    <li>
                                                        Khusus Rumah Kontrak : berakhirnya masa kontrak &gt; akhir 
                                                        tenor kredit atau sudah tinggal di rumah
                                                        tersebut minimal 2 tahun.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion-3" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-3">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-3" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-3">
                                        Apa saja ketentuan pengajuan gadai BPKB?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-3" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-3" 
                                    data-bs-target="#accordion-3">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <ol className="list-decimal">
                                            <li>Anda yang mengajukan harus berprofesi sebagai Karyawan (Swasta/PNS), Wiraswasta maupun Profesional.</li>
                                            <li>Berlaku untuk Total Pokok Hutang (PH) dibawah Rp. 500 juta.</li>
                                            <li>Penggunaan dana wajib untuk kebutuhan konsumtif.</li>
                                            <li>Jaminan yang digunakan bisa BPKB motor atau BPKB mobil.</li>
                                            <li>Usia kendaraan yang dapat dibiayai adalah sbb*:
                                                <ul className="list-disc">
                                                    <li>Untuk Motor
                                                        <ul className="list-disc">
                                                            <li>Maksimal usia kendaraan 9 tahun sejak tahun produksi hingga akhir masa kredit&nbsp;</li>
                                                        </ul>
                                                    </li>
                                                    <li>Untuk Mobil Penumpang
                                                        <ul className="list-disc">
                                                            <li>Maksimal usia kendaraan 12 tahun sejak tahun produksi hingga akhir masa kredit&nbsp;</li>
                                                        </ul>
                                                    </li>
                                                    <li>Untuk Mobil Niaga (Pick up)
                                                        <ul className="list-disc">
                                                            <li>Maksimal usia kendaraan 10 tahun sejak tahun produksi hingga akhir masa kredit</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Tenor yang dapat diambil untuk Jaminan Motor atau Mobil adalah maksimal 4 tahun / 48 bulan*.&nbsp;</li>
                                            <li>Dalam hal Anda mengambil Produk Fasilitas Dana maka Anda wajib menyerahkan bukti pembayaran / transfer atas
                                                pembelian barang atau jasa kepada ADIRA FINANCE paling lambat 3 bulan sejak tanggal Perjanjian Pembiayaan.</li>
                                            <li>Setiap fasilitas pembiayaan yang diambil oleh Anda akan dilengkapi dengan Asuransi terhadap Barang atau Jasa
                                                yang dibiayai ADIRA FINANCE, serta Asuransi lainnya termasuk Asuransi terhadap Diri Anda (seperti Asuransi
                                                Kecelakaan Diri dan/atau Asuransi Jiwa) dan/atau Asuransi terhadap Fasilitas Pembiayaan sebagaimana ditawarkan
                                                oleh ADIRA FINANCE kepada Anda pada saat pengajuan.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion-4" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-4">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-4" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-4">
                                        Apa manfaat yang dapat diperoleh dari gadai BPKB?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-4" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-4" 
                                    data-bs-target="#accordion-4">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <ol className="list-decimal">
                                            <li>Persyaratan kredit yang <strong>mudah </strong>dan proses pencairan <strong>cepat.</strong></li>
                                            <li><strong>Perlindungan asuransi</strong> untuk kendaraan &amp; Konsumen</li>
                                            <li><strong>BPKB aman terjamin.</strong></li>
                                            <li>Dukungan <strong>jaringan ratusan kantor cabang Adira Finance </strong>di seluruh wilayah Indonesia</li>
                                            <li>Terbuka bagi konsumen dengan profesi Karyawan (Swasta/PNS), Wiraswasta, Profesional maupun kelembagaan</li>
                                            <li>Kemudahan pembayaran angsuran melalui: Kantor Cabang, Keday Adira, Aplikasi Adiraku, jaringan Bank Danamon,
                                                Indomaret/Alfamart, Kantor Pos, transfer ke Virtual Account Bank Danamon, Virtual Account BCA, aplikasi
                                                LinkAja.&nbsp;</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div id="accordion-5" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-5">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-5" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-5">
                                        Apa saja risiko yang mungkin harus ditanggung?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-5" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-5" 
                                    data-bs-target="#accordion-5">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <ul className="list-disc">
                                            <li>Risiko pengajuan tidak disetujui sewaktu – waktu apabila Konsumen tidak memenuhi syarat-syarat yang ditentukan
                                                oleh ADIRA FINANCE baik itu persyaratan dokumen maupun hal lain yang merupakan wewenang dari ADIRA FINANCE.</li>
                                            <li>Apabila Konsumen lalai dalam pembayaran angsuran ataupun tidak memenuhi kewajiban yang disepakati dalam
                                                Perjanjian Pembiayaan, maka terdapat Risiko sebagai berikut :
                                                <ol className="list-decimal">
                                                    <li>Risiko tambahan biaya yang muncul apabila terjadi keterlambatan dalam pembayaran angsuran (biaya
                                                        eksekusi agunan dan denda), sbb*:
                                                        <ul className="list-disc">
                                                            <li>Denda keterlambatan per hari untuk agunan mobil (roda empat/lebih) sebesar 0,2% (nol koma dua
                                                                persen) x besar angsuran</li>
                                                            <li>Biaya Penagihan maksimal 15% (lima belas persen) dihitung dari angsuran yang tertunggak.</li>
                                                        </ul>
                                                    </li>
                                                    <li>Risiko tambahan biaya yang muncul apabila terjadi pelunasan dipercepat, sbb*:
                                                        <ul className="list-disc">
                                                            <li>Agunan Mobil (roda empat/lebih) sebesar 8% (tujuh persen) dari jumlah yang harus dilunasi</li>
                                                        </ul>
                                                    </li>
                                                    <li>Risiko eksekusi agunan yang terjadi dengan kondisi sebagai berikut*;
                                                        <ul className="list-disc">
                                                            <li>Konsumen lalai dalam melakukan pembayaran angsuran sesuai perjanjian</li>
                                                            <li>Konsumen melakukan pengalihan atau penggadaian obyek pembiayaan tanpa sepengetahuan Perusahaan
                                                                Pembiayaan.</li>
                                                            <li>Adapun Biaya Eksekusi Agunan yang akan dikenakan adalah <strong>maksimal 15% (lima belas persen)
                                                                </strong>dari <strong>Total Keseluruhan Kewajiban Konsumen </strong></li>
                                                        </ul>
                                                    </li>
                                                    <li>Segala pembayaran yang dilakukan oleh Konsumen kepada ADIRA FINANCE akan menjadi hak ADIRA FINANCE
                                                        sepenuhnya dan tidak dapat diambil kembali oleh Konsumen.</li>
                                                    <li>Risiko reputasi berupa tercatatnya Riwayat Pembiayaan pada Sistem Layanan Informasi Keuangan (SLIK)
                                                        ketika Konsumen menunggak pembayaran.</li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion-6" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-6">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-6" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-6">
                                        Apa hak yang dapat diperoleh?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-6" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-6" 
                                    data-bs-target="#accordion-6">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <ul className="list-disc">
                                            <li>Konsumen akan memperoleh fasilitas Pembiayaan yang diberikan oleh ADIRA FINANCE dan dapat menggunakan Objek
                                                Pembiayaan setelah Konsumen melengkapi dokumen administrasi yang ditetapkan ADIRA FINANCE, menandatangani
                                                Perjanjian, Biaya Administrasi, Biaya Asuransi, Biaya Provisi dan biaya-biaya lainnya ataupun denda (apabila
                                                ada).</li>
                                            <li>Konsumen berhak mengakhiri Perjanjian sebelum Jangka Waktu Pembiayaan berakhir dengan membayar seluruh kewajiban
                                                yang belum dilunasi secara penuh, dengan ketentuan bahwa Konsumen wajib menyampaikan maksudnya terlebih dahulu
                                                kepada ADIRA FINANCE minimal 30 hari sebelum pelunasan.</li>
                                            <li>Konsumen akan menerima Bukti Kepemilikan Kendaraan Bermotor (BPKB) setelah seluruh kewajibannya dilunasi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion-7" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-7">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-7" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-7">
                                        Apa saja kewajiban yang harus dipenuhi?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-7" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-7" 
                                    data-bs-target="#accordion-7">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <ul className="list-disc">
                                            <li>Konsumen wajib membayar Biaya Administrasi, Biaya Asuransi, Provisi, dan biaya-biaya lainnya ataupun denda
                                                (apabila ada) sesuai dengan yang diinformasikan oleh Petugas ADIRA FINANCE di Cabang pada saat awal pengajuan.
                                            </li>
                                            <li>Konsumen dengan biayanya sendiri wajib memelihara dan menjaga Objek Pembiayaan agar tetap dalam kondisi baik dan
                                                tidak mempergunakan Objek Pembiayaan untuk tujuan yang bertentangan dengan hukum. Kerusakan, hilang ataupun
                                                musnahnya Objek Pembiayaan menjadi tanggung jawab Konsumen.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="accordion-8" className="accordion-wrapper">
                            <div className="card accordion-item mb-5">
                                <div className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-8">
                                    <button 
                                        className="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-8" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-8">
                                        Apa saja yang bisa dibiayai oleh Gadai BPKB?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-8" 
                                    className="collapse"
                                    aria-labelledby="accordion-heading-8" 
                                    data-bs-target="#accordion-8">
                                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>Yang dapat dibiayai Kredit Multiguna Jasa, yaitu :</p>
                                        <ul className="list-disc">
                                            <li>Biaya Travel/Wisata</li>
                                            <li>Biaya Pendidikan/kursus/training</li>
                                            <li>Biaya kesehatan</li>
                                            <li>Biaya Renovasi Rumah</li>
                                            <li>Biaya Kenduri (Perayaan, sunatan, kelahiran, dll)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mt-5 mt-2">
                    <Link 
                        href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                        target="_blank" 
                        className="w-72 btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                        Ajukan Gadai BPKB Sekarang
                    </Link> 
                </div>
            </div>
        </section>
    )
}