---
layout: chapter

chapterId: فصل ۱۵
title: برش‌دهنده‌ی کیک
permalink: /Chapter15
---

![pie!]({{ site.url }}{{site.baseurl}}/assets/img/logo.png){:class="img-responsive"}

# فصل پانزدهم: برش‌دهنده‌ی کیک

برش‌دهنده‌ی کیک آنلاین یک نرم‌افزار مبتنی بر وب است که به بنیان‌گذاران امکان ردیابی مشارکت‌ها و تخصیص سهام برای تیم آن‌ها را می‌دهد. این نرم‌افزار به این دلیل ایجاد شده که بسیاری افراد به من می‌گفتند: **تو باید یک برنامه‌ی ردیابی را ایجاد کنی.** در واقع، چندین نفر بطور مستقل برنامه‌هایی مشابه بر اساس مدل برش کیک تولید کرده‌اند. البته این برنامه‌ها ممکن است نشان‌گر محاسبات واقعی کتاب من باشد یا نباشد و من از خوانندگان می‌خواهم که نرم‌افزاری را انتخاب کنند که منطبق با مدل باشد.

قوانین و منطق موجود در نرم‌افزار برش‌دهنده‌ی کیک دقیقا در این کتاب شرح داده شده است. این قوانین شامل هر دو چارچوب تخصیص و چارچوب بازیابی است. محاسبات در صفحه گسترده‌ی اکسل نیز نمایش داده شده است. اما صفحه گسترده دارای محدودیت‌هایی است که نرم‌افزار فاقد آن‌هاست. هرچه باشد تنها یک صفحه گسترده است و نه یک برنامه‌ی نرم‌افزاری.

من استفاده از این مدل را مطابق با آن‌چه در اینجا گفته شده توصیه می‌کنم. چرا که هر‌گونه تغییری، منجر به کاهش منصفانه بودن مدل می‌شود.

البته برخی افراد استفاده از نسخه‌ی اصلاح شده مدل برش کیک را انتخاب می‌کنند. اگر شما قصد تغییر در مدل را دارید، صفحه گسترده اکسل احتمالا بهترین فضا برای شروع است زیرا می‌توانید اصلاحات لازم را در آن انجام دهید.

اگر قصد استفاده از مدل مطابق آن‌چه در این کتاب گفته شده را دارید، نرم‌افزار برش‌دهنده‌ی کیک خیلی خوب عمل می‌کند. با این وجود باز هم می‌توانید تغییراتی در صفحه تنظیمات کیک صورت دهید.

## استفاده از برش‌دهنده‌ی کیک

مانند اغلب نرم‌افزارهای آنلاین، برش‌دهنده‌ی کیک بصری و قابل درک طراحی شده است. توضیحات کمکی برای برنامه تهیه شده و ما به بروزرسانی و ارتقای برنامه بر اساس بازخورد کاربر ادامه می‌دهیم. استفاده از این نرم‌افزار آسان است.

البته بدون یک درک اولیه از نحوه کارکرد پویایی تقسیم‌بندی سهام، نمی‌توان این ابزار را بطور کامل توسط تیم پیاده کرد. من این کتاب را برای کمک به روشن شدن کارکرد تعاملی مدل و اهمیت تقسیم‌بندی پویای سهام مطابق با مدل برش کیک نوشته‌ام. البته هدف من این است که چه شما از نرم‌افزار برش‌دهنده‌ی کیک استفاده کنید چه نکنید، بتوانید از این کتاب بهره‌مند شوید و از محتوای آن استفاده کنید.

## ظاهر نرم‌افزار

زبانه‌ی خانه در برش‌دهنده‌ی کیک، صفحه‌ی نمایش اصلی است. این صفحه همه آنچه را که باید درباره‌ی کیک خود بدانید ارائه می‌کند. در سمت چپ، اعضای تیم نمایش داده می‌شود، که تصویر پیش فرض **گرانت‌ها** هستند که حیواناتی ساختگی بعنوان نماد کارمندان سخت‌کوش شرکت‌های نوپا هستند.

![گرانت]({{ site.url }}{{site.baseurl}}/assets/img/grunt.png){:class="img-responsive"}

در سمت راست، یک نمودار کیک نشان‌دهنده‌ی تقسیمات کنونی و یک نمودار میله‌ای نشان‌دهنده‌ی تراز صندوق برای هر شریک قرار دارد.

در بالا می‌توانید تعداد برش‌های کیک و مجموع مقدار پول صندوق را ببینید.

## نقش‌های کاربر

چهار نقش کاربر اصلی در نرم‌افزار وجود دارد: مالک کیک، کارمند، مدیر و مشاور. مالک کیک، آن را بر اساس حساب‌ها شکل داده و هزینه‌ی ماهیانه‌ و سالیانه را پرداخت می‌کند. فقط مالک دسترسی کامل به ابزار با امکان مشاهده و ویرایش تمامی تنظیمات از جمله تنظیمات حقوق و کیک را دارد.

فقط مالکان کیک می‌توانند مشارکت‌های همه‌ی اعضا به غیر از خودشان را وارد کرده و فقط آن‌ها می‌توانند در صندوق سپرده‌گذاری یا از آن برداشت کنند. این موضوع اطمینان می‌دهد که یک مرجع برای کیک موجود است.

مالکان کیک می‌توانند اعضای جدیدی به تیم اضافه کنند. زمانی که عضو جدید افزوده می‌شود، یک ایمیل دریافت می‌کند و به پیوستن به کیک دعوت می‌شود و می‌تواند مشارکت‌های خود را وارد نماید. زمانی که کاربران افزوده شدند، شما می‌توانید آن‌ها را به یکی از دسته‌های مدیران، کارمندان یا مشاوران تخصیص دهید.

> **برش‌دهنده‌ی کیک**
>
> برای افزودن یک عضو تیم، روی دکمه‌ی افزودن عضو تیم در سمت چپ بالای صفحه کلیک کنید.
>
> افراد می‌توانند نام‌ها و تصاویری که در سایت نمایش داده می‌شود را کنترل کنند، و بنابراین شما قادر به ویرایش نام یا تصویر پس از افزودن آن‌ها نیستید.
>
> اعضای تیم می‌توانند مشارکت‌های خود را از طریق حساب شخصی خود وارد کنند. البته، حتی اگر حساب شخصی برای آن‌ها ایجاد نشود، شما می‌توانید مشارکت‌هایشان را وارد کنید.

مدیران نمایی مشابه با مالک کیک را از نرم‌افزار مشاهده می‌کنند اما قادر به تغییر تنظیمات بجز معدود تنظیمات شخصی نیستند. فقط مالکان کیک توانایی تغییر همه تنظیمات را دارند.

کارمندان و مشاوران نمی‌توانند هیچ گونه اطلاعات مرتبط با کیک، بغیر از مشارکت‌های شخصی خود را مشاهده کنند. تفاوت اصلی بین کارمند و مشاور این است که همان‌طور که قبلا گفته شد، مشاور نمی‌تواند اخراج شود.

در ادامه عکس‌هایی از یک کیک از منظر کاربران مختلف ارائه شده است. توجه کنید که در نمای مشاور و کارمند، حساب دیگر اعضای تیم قابل مشاهده نبوده و دکمه‌های مربوط به افزودن عضو و مدیریت صندوق غیرفعال هستند. دسترسی این فرد به فعالیت‌های خود محدود است.

![نمای مالک کیک و مدیر]({{ site.url }}{{site.baseurl}}/assets/img/ps1.png){:class="img-responsive"}

![نمای کارمند و مشاور]({{ site.url }}{{site.baseurl}}/assets/img/ps2.png){:class="img-responsive"}

## ورود مشارکت‌ها

مدل برش کیک افراد را ملزم به ردیابی مشارکت‌های هزینه‌ای، تجهیزات، ایده، منابع، تسهیلات، فروش و مهم‌تر از همه زمانی می‌کند. برش‌دهنده‌ی کیک شامل ردیابی برای همه مشارکت‌هاست بطوریکه می‌تواند به گونه‌ای مناسب برش‌ها را بر اساس مشارکت‌های فردی تخصیص دهد. این کار مادامی که شما و تیمتان مناسب بدانید می‌تواند انجام شود. افراد می‌توانند در صورت امکان مشارکت‌های خود را وارد نمایند یا مالک تیم می‌تواند اینکار را برای آن‌ها انجام دهد. برش‌دهنده‌ی کیک سوابق همه‌ی مشارکت‌ها را نگه داشته و آخرین زمان ورود افراد را ثبت می‌کند بطوریکه مالک کیک می‌تواند در صورت لزوم یادآور دقیقی را تهیه کند.

بسیاری افراد زمانی که از آن‌ها خواسته می‌شود که زمان خود را ثبت کنند، امتناع می‌کنند. آنها معمولا هزینه‌های خود را بیاد می‌آورند اما دوست ندارند زمان خود را دنبال کنند. شما و تیمتان می‌توانید درباره‌ی سطح ریز شدن اطلاعات در برش‌دهنده‌ی کیک و جزئیات مطرح شده تصمیم‌گیری کنید اما من نادیده گرفتن این امر بطور کلی را توصیه نمی‌کنم. درک نحوه‌ی صرف زمان توسط شما و تیمتان مانند ردیابی هزینه‌ها اهمیت دارد (شاید حتی مهم‌تر باشد).

ابزارهای ردیابی زمان در برش‌دهنده کیک اساسی هستند و به تیم شما کمک می‌کند که زمان را وارد کرده، زمان را به پروژه یا دسته فعالیت خاصی اختصاص دهید، و توضیحی درباره آنچه در طول آن بازه‌ی زمانی انجام می‌شود ارائه دهید. ما سعی کردیم این موضوع را تا حد امکان بی‌دردسر سازیم. ما هم ردیابی زمان خود را دوست نداریم!

> **برش‌دهنده‌ی کیک**
>
> برش‌دهنده‌ی کیک دارای پروژه‌های پیش فرض است. شما می‌توانید این پروژه‌ها را حذف کرده و / یا پروژه خود را بیافزایید. زیر منوی تنظیمات روی تنظیمات کیک کلیک کنید.

## کیک‌های چندگانه

یک کاربر می‌تواند در چندین کیک بطور هم‌زمان مشارکت داشته باشد. کاربر می‌تواند برای شرکت بعنوان شریک دعوت شود یا می‌تواند کیک خود را داشته باشد. نام کیک فعال در سمت راست بالای صفحه ظاهر می‌شود. برای تغییر نام کیک یا شروع یک کیک جدید روی نام کلیک کنید. مالکان کیک می‌توانند تنظیمات کیک را کنترل کرده، کاربران را اضافه کنند و مسئولیت پرداخت را بر عهده دارند. ضمنا، از پرداخت‌های شما هم تشکر می کنم!

افراد روی اطلاعات خود مانند نام و تصویر کنترل دارند اما فقط مالکان کیک می‌توانند حقوق را تعیین کنند. حقوق برای هر کیک بسته به نقش شما در آن تعیین می‌شود. اگر شما مدیر ارشد بازاریابی برای یک کیک و سرو کننده‌ی برگر برای دیگری باشید، نقش مدیریتی شما احتمالا حقوق متعارف بازار بالاتری را خواهد داشت.

## زبانه‌ها

کاربرد زبانه‌های بالای صفحه به شرح زیر است:

<table>
	<tbody>
		<tr>
			<th>خانه</th>
			<td>کاربران را به صفحه‌ی اصلی نمودار کیک هدایت می‌کند.</td>
		</tr>
        <tr>
			<th>گزارشات</th>
			<td>دسترسی به انواع گزارشات مانند جدول سرمایه‌ی جاری شما، فهرست مشارکت‌ها و سایر تحلیل‌ها.</td>
		</tr>
        <tr>
			<th>حساب</th>
			<td>دسترسی به متغیرهایی که می‌تواند توسط مالک حساب شخصی تغییر یابد.</td>
		</tr>
        <tr>
			<th>کمک</th>
			<td>نکته‌ها و اطلاعاتی درباره‌ی ابزار. دسترسی به خدمات مشتری.</td>
		</tr>
	</tbody>
</table>

## تنظیمات

برش‌دهنده‌ی کیک دارای انواع تنظیماتی است که بر نحوه‌ی محاسبه برش‌ها تاثیر می‌گذارد. اغلب تنظیمات واضح هستند اما من برخی از مهم‌ترین آنها را در اینجا توضیح می‌دهم.

### تنظیمات عضو تیم

مالکان کیک می‌توانند اعضای تیم را از طریق ایمیل و نام دعوت کنند. اگر فرد هم اکنون در پایگاه داده‌ی برش کیک هست (از طریق ایمیل)، نام و تصور کنونی جایگزین نام وارد شده هنگام افزودن فرد می‌شود. در صورتی که افراد نخواهند از تصویر پیش‌فرض نرم‌افزار استفاده کنند، می‌توانند نام و تصویر خود را تغییر دهند که قبلا گفته شد.

زمانی که شخص مشارکت کننده به کیک اضافه می‌شود، می‌تواند مشارکت‌های خود را وارد کند. مالک کیک نیز می‌تواند مشارکت‌های افراد را وارد نماید. پس از افزودن عضو تیم، مالک کیک هنوز می‌تواند تنظیمات مربوط به ایشان را روی آیکون کوچک بالای صفحه و سمت راست تصویر اعضای تیم ویرایش کند.

زمانی که فردی برای اولین بار افزوده می‌شود، حقوق باید مشخص شود. هنگام ورود حقوق، حقوق متعارف بازار منهای هر پرداختی که از حساب شرکت صورت گرفته را وارد نمایید. اگر شما بیشتر بپردازید، باید این فیلد را اصلاح کنید. برش‌دهنده‌ی کیک بطور اتوماتیک حقوق را با تقسیم بر ۲۰۰۰ که تقریبا تعداد ساعات کاری در سال برای یک شغل تمام وقت است، به نرخ ساعتی تبدیل می‌کند. در ایالات متحده یک شغل تمام وقت ۴۰ ساعت در هفته است و اغلب آمریکایی‌ها دو هفته تعطیلات دارند. در اغلب کشورها این عدد مشابه است، گرچه زمان تعطیلات متفاوت است. مادامی که تمامی شرکت‌کنندگان از محاسبه یکسانی برای نرخ ساعتی استفاده می‌کنند، نیازی به اصلاح این عدد نیست.

اگر مالک کیک، حقوق یک عضو تیم را ویرایش کند، این تغییر صرفا بر محاسبات آینده اثر می‌گذارد. این ویرایش در محاسبات قبلی تاثیری نداشته و تغییری در مشارکت‌های قبلی ایجاد نمی‌کند. این رویه برای تمامی تغییرات انجام گرفته در تنظیمات صادق است.

### تنظیمات کیک

برای دسترسی به تنظیمات کیک، روی دکمه‌ی تنظیمات کیک بالای اعضای تیم کلیک کنید. صفحه‌ی تنظیمات کیک جایی است که شما پارامترهای مورد استفاده در محاسبات برای کیک خود را تنظیم می‌کنید. در ادامه توضیحی درباره تاثیر تنظیمات روی کیک شما ارائه شده است. تغییرات در هر یک از تنظیمات صرفا بر مشارکت‌های آینده تاثیر خواهد داشت. این تنظیمات تاثیری بر مشارکت‌های گذشته ندارد.

<table>
	<tbody>
		<tr>
			<th>تنظیمات پول</th>
			<td>
                از پول اصلی که شرکت شما با آن فعالیت می‌کند استفاده کنید. زمانی که خرید سهم را محاسبه می‌کنید، یک برش به نسبت یک به یک به پول تبدیل می‌شود. برش‌دهنده‌ی کیک نرخ‌های ارز را در نظر نمی‌گیرد. لطفا توجه کنید که قیمت خرید سهم چیزی مانند ارزش نیست. بلکه صرفا قیمت متعارفی برای خرید برش‌های افراد هنگام ترک شرکت است.
            </td>
		</tr>
        <tr>
			<th>ضریب غیرنقدی</th>
			<td>
                این ضریب برای مشارکت‌های غیرنقدی از جمله تجهیزات و منابع تحت تملک قبلی است. تنظیمات پیش‌فرض ۲ است. من تغییر این ضریب را به دلیل گفته شده قبلی توصیه نمی‌کنم.
            </td>
		</tr>
        <tr>
			<th>ضریب نقدی</th>
			<td>
                این ضریب برای مشارکت‌های نقدی از جمله تجهیزات و منابع خریداری شده برای شرکت، هزینه‌های پرداخت نشده و وجه نقد است. تنظیمات پیش‌فرض ۴ است. من تغییر این ضریب را به دلیل گفته شده قبلی توصیه نمی‌کنم.
            </td>
		</tr>
        <tr>
			<th>نرخ کمیسیون</th>
			<td>
                این درصد نرخ مورد استفاده برای محاسبه‌ی کمیسیون به ازای درآمد ایجاد شده توسط فروشندگان کمیسیونی است. 
هر کسی مستحق دریافت کمیسیون نمی‌شود. این نرخ را بر اساس نرخ‌های متعارف بازار صنعت خود تعیین کنید. این نرخ می‌تواند بسیار متفاوت باشد بنابراین شما نیاز به جست‌وجوی اندکی برای دستیابی به عدد صحیح هستید. مقدار پیش فرض ۱۰ درصد است.
            </td>
		</tr>
        <tr>
			<th>نرخ حق‌امتیاز</th>
			<td>
                این عدد، درصد نرخ مورد استفاده برای محاسبه‌ی حق امتیاز قابل پرداخت به مالکان دارایی معنوی بر اساس ایده‌هایی است که ایجاد درآمد می‌کنند.
این نرخ را بر اساس نرخ‌های متعارف بازار برای صنعت خود تنظیم کنید. بنابراین نیاز به انجام تحقیق اندکی برای دستیابی به عدد درست هستید. مقدار پیش‌فرض ۵ درصد است. 
            </td>
		</tr>
        <tr>
			<th>سهم یابنده</th>
			<td>
                اگر شرکت شما بخواهد که به فردی که امکان سرمایه‌گذاری‌ها را فراهم کرده‌اند، یک سهم یابنده بعنوان پاداش بدهد (که معمول نیست)، می‌توانید دو نرخ را تعیین کنید. یکی برای X مقدار اول وجه نقد و یکی برای بقیه وجه نقد. 
            </td>
		</tr>
        <tr>
			<th>ماشین شخصی</th>
			<td>
                شرکت شما می‌تواند درباره‌ی چگونگی محاسبه‌ی برش‌های افرادی که از ماشین شخصی خود برای کار استفاده می‌کنند، تصمیم‌گیری کند.
            </td>
		</tr>
        <tr>
			<th>پروژه‌ها</th>
			<td>
                پروژه‌ها برای دیدن نحوه‌ی صرف زمان و منابع استفاده می‌شوند. شما می‌توانید پروژه‌ها را افزوده یا کسر کنید.
            </td>
		</tr>
        <tr>
			<th>تنظیم مجدد کیک</th>
			<td>
                تنظیم مجدد کیک منجر به پاک شدن همه مبادلات می‌شود و بنابراین می‌توانید از ابتدا آغاز کنید. 
            </td>
		</tr>
        <tr>
			<th>حذف کیک</th>
			<td>
                حذف کیک، منجر به پاک شدن تمامی داده‌ها و خاتمه‌ی پرداخت‌ها می‌شود.
            </td>
		</tr>
	</tbody>
</table>

هنگام انجام تغییرات از کلیک روی **ذخیره تغییرات** مطمئن شوید!

از آنجا که فناوری سریع‌تر از کتاب‌ها تغییر می‌کند، ممکن است گزینه‌های متفاوتی در نسخه آنلاین وجود داشته باشد. اما مطمئن باشید که مدل اصلی برش کیک تغییری نمی‌کند.

## محاسبات

برش‌دهنده‌ی کیک، مشارکت‌ها را با استفاده از محاسبات توضیح داده شده در این کتاب به برش‌هایی تبدیل می‌کند. در ادامه خلاصه‌ای از این محاسبات مطرح شده است.

<table>
    <thead>
        <tr>
            <th>
                مشارکت
            </th>
            <th>
                محاسبه
            </th>
        </tr>
    </thead>
	<tbody>
		<tr>
			<td>
                زمان
            </td>
            <td>
                ((حقوق متعارف بازار ÷۲۰۰۰ )*(ساعات)*ضریب غیرنقدی
            </td>
		</tr>
        <tr>
			<td>
             	هزینه‌ها
            </td>
            <td>
                (مقدار پرداختی - مقدار بازپرداخت شده)*ضریب نقدی
            </td>
		</tr>
        <tr>
			<td>
               	منابع جدید
            </td>
            <td>
                (مقدار پرداختی - مقدار بازپرداخت شده)*ضریب نقدی
            </td>
		</tr>
        <tr>
			<td>
                منابع کم‌تر از یک سال سن
            </td>
            <td>
                (مقدار پرداختی - مقدار بازپرداخت شده)*ضریب غیر‌نقدی
            </td>
		</tr>
        <tr>
			<td>
                منابع بیش‌تر از یک سال سن
            </td>
            <td>
                (ارزش متعارف بازار - مقدار بازپرداخت شده)*ضریب غیرنقدی
            </td>
		</tr>
        <tr>
			<td>
                تجهیزات جدید
            </td>
            <td>
                (مقدار پرداختی - مقدار بازپرداخت شده)*ضریب نقدی
            </td>
		</tr>
        <tr>
			<td>
                تجهیزات کم‌تر از یک سال سن
            </td>
            <td>
                (مقدار پرداختی - مقدار بازپرداخت شده)*ضریب غیر‌نقدی
            </td>
		</tr>
        <tr>
			<td>
                تجهیزات بیش‌تر از یک سال سن
            </td>
            <td>
                (ارزش متعارف بازار - مقدار بازپرداخت شده)*ضریب غیرنقدی
            </td>
		</tr>
        <tr>
			<td>
                فروش
            </td>
            <td>
                ((مقدار فروش*حق امتیاز)-پرداخت نقدی)*ضریب غیرنقدی
            </td>
		</tr>
        <tr>
			<td>
                سهم یابنده
            </td>
            <td>
                ((مقدار افزایش<نقطه بازدهی* درصد قبل از بازدهی)+(مقدار افزایش > نقطه بازدهی*درصد پس از بازدهی)
            </td>
		</tr>
        <tr>
			<td>
                تسهیلات
            </td>
            <td>
                (ارزش متعارف بازار - پرداخت نقدی)*ضریب غیرنقدی
            </td>
		</tr>
        <tr>
			<td>
                سایر موارد
            </td>
            <td>
                مقدار*ضریب نقدی یا ضریب غیرنقدی (بسته به گزینه)
            </td>
		</tr>
        <tr>
			<td>
                ماشین شخصی
            </td>
            <td>
                (ارزش متعارف بازار - مقدار بازپرداخت شده)* ضریب انتخاب شده
یا
(هزینه سوخت - مقدار بازپرداخت شده)*ضریب نقدی
به اضافه
(((مقدار مایل به کیلومتر*نرخ ثابت) - هزینه‌های سوخت)) - یادآور بازپرداخت)*ضریب غیر‌نقدی
            </td>
		</tr>
	</tbody>
</table>

## صندوق

عملکرد صندوق در بخش مشارکت‌های نقدی توضیح داده شد. برش‌ها به افراد بر اساس مالکیت آن‌ها از صندوق در زمان برداشت پول و نه هنگام سپرده‌گذاری در آن تخصیص می‌یابد.

هنگام افزودن وجه نقد به صندوق، برش‌دهنده‌ی کیک، محاسبه دست‌مزد یابنده را تنها در صورتی اعمال می‌کند که فردی بعنوان دریافت کننده‌ی سهم یابنده نام‌گذاری شده باشد.

## جمع‌بندی

اگر شما با مدل برش کیک که در این کتاب تشرح شد آشنا باشید، کارکرد برش‌دهنده‌ی کیک کاملا مشخص است. این ابزار برای ردیابی مشارکت‌ها و اعمال محاسبات تخصیص و بازیابی توضیح داده شده طراحی شده است.

مالکان کیک روی اعضای تیم، اطلاعات قابل مشاهده برای آن‌ها، و تنظیماتی که منجر به محاسبات می‌شود، کنترل دارند. تنظیمات پیش‌فرض، تنظیمات توصیه شده برای نرم‌افزار است.